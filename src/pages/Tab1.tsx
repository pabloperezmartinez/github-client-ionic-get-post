import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab1.css';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import { fetchRepositories } from '../services/githubService';
import { useState } from 'react';

import axios from 'axios';

const Tab1: React.FC = () => {
  const [repos, setRepos] = useState<RepositoryItem[]>([]);

  useIonViewWillEnter(() => {
    const loadRepos = async () => {
      console.log("Entra")
      const reposData = await fetchRepositories();
      setRepos(reposData);
    };
    loadRepos();
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          { repos?.map((repo, key) => (
            <IonItem key={key}>
              <IonThumbnail slot='start'>
                <img src={repo.imageUrl} alt={repo.name} />
              </IonThumbnail>
              <IonLabel>
                <h2>{repo.name}</h2>
                <p>Lenguaje: {repo.language}</p>
                <p>Propietario: {repo.owner}</p>
                <p>{repo.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
