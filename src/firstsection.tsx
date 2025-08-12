
import Button from './Button'
import './firstsection.css'

export default function Firstsection(){
    return(

    <div className="firstsection">
       


    <h5> <div className="voice">Votre Voix </div>, Notre Action. </h5>
    <p> Soumettez vos demandes de services municipaux <br/>
    pour les réparations routières et les services quotidiens.<br/>
    Suivez l’avancement en temps réel et recevez<br/> 
    des mises à jour de nos agents dédiés.</p>
        <div className='specialbtns'>

        <div className='cnt'><Button name="Connecter"/></div>
        <div className='rec'><Button name="Reclamer"/></div>
        </div>


</div>

)
}