import { IonButton, IonIcon, IonInput, IonItem, IonList, IonTextarea } from "@ionic/react";
import './RepoFormComponent.css'
import { code, image, logoGithub, person } from "ionicons/icons";
import { useHistory } from "react-router";
import { RepositoryItem } from "../interfaces/RepositoryItem";
import { createRepository } from "../services/githubService";

const RepoFormComponent: React.FC = () => {

    const history = useHistory();

    const repoFormData: RepositoryItem = {
        name: '',
        description: '',
        imageUrl: null,
        owner: null,
        language: null
    }

    const setRepoName = (name: string) => {
        repoFormData.name = name;
    }

    const setRepoLang = (description: string) => {
        repoFormData.description = description;
    }

    const createRepo = async (repoFormData: RepositoryItem) => {
        if (repoFormData.name && repoFormData.description) {
            await createRepository(repoFormData.name, repoFormData.description);
            history.push('/');  // Redirige a la página principal o donde desees después de crear el repositorio
        } else {
            alert('Por favor complete todos los campos requeridos');
        }
    }

    return (
        <div className="login-box">
            <form action="">
                <IonList>
                    <IonItem>
                        <IonIcon icon={logoGithub} slot="start" />
                        <IonInput value={repoFormData.name} onIonChange={(e) => setRepoName(e.detail.value!)} label="Nombre de repositorio" labelPlacement="floating" />
                    </IonItem>
                    <IonItem>
                        <IonIcon icon={code} slot="start" />
                        <IonInput value={repoFormData.description} onIonChange={(e) => setRepoLang(e.detail.value!)} label="Descripción" labelPlacement="floating" />
                    </IonItem>
                </IonList>
                <IonButton onClick={() => createRepo(repoFormData)} expand="block" shape="round">Guardar</IonButton>
            </form>
        </div>
    );
}

export default RepoFormComponent;