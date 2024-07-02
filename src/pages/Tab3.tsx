import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <img src="https://ih1.redbubble.net/image.568703795.7190/st,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="Perfil" />
          <IonCardHeader>
            <IonCardTitle>Pablo Pérez Martínez</IonCardTitle>
            <IonCardSubtitle>pabloperezmartinez</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Docente de Pontificia Universidad Católica Del Ecuador (PUCE) y 
            Universidad Internacional SEK, Desarrollador de área informática de la Pontificia Universidad
            Católica Del Ecuador, Rockero adicto al café</p>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
