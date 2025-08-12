import Button from "./Button";
import Lamptout from "./lamptout";

import './secondpage.css'
export default function Reports() {
  return (
    <div className="background">
    <div className="again">

     <div className="nrecltitle"><h4>
        Mes Reclamations :
      </h4>
      <p>Suivez l'état de vos demandes soumises </p></div>
      <div className="nreclbtn">
      <Button name="Nouvelle Reclamation"/>
      </div>
    </div>
    <div className="terc">
      <Button name="Tout" />
      <div className="ck">
      <Button name="En Cours" />
      <Button name="Résolue" />
      </div>
    </div>
    <Lamptout/>
    <Lamptout/>
    <Lamptout/>

    
    </div>
  );
}
