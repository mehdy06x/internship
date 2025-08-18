

import ChangeEtat from './changeEtat';
import './secondpage.css'

export default function AdminSection() {
  return (
    <>
    <div className="background">
    

      <div className="nrecltitle"><h4>
        Les Reclamations :
      </h4>
      <p> l'état des demandes soumises </p>
      
      </div>      
      <ChangeEtat/>
      <ChangeEtat/>
      <ChangeEtat/>
    </div>
    </>
  );
}
