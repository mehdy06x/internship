import Button from "./Button";
import Demand from "./demande";
import './secondsection.css'
export default function SecondSection(){
    return(
        <>
        <div className="sdsection"><Demand/></div>

        <div className="mrg">
            <h5><span className="how">Prêt(e) à Soumettre Votre Demande ?</span></h5>

        <div className="pr">
        <p>Rejoignez des milliers de citoyens qui font confiance à notre plateforme
        pour les services municipaux. Votre demande compte pour nous.</p>
        </div>

        </div>
        <div className='spcbtns'>
        <div className='cn'><Button name="Connecter"/></div>
        <div className='re'><Button name="Reclamer"/></div>
        </div>
        </>
    )
}