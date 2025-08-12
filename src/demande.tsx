import Button from "./Button"
import Circle from "./circle"
import './circle.css'
import Lampa from "./Lampa"
import Subsection from "./subsection"

export default function Demand(){

    return (
    <>
    <div className="marg">    <h5> Comment Nous Traitons <span className="how">Vos Demandes :</span></h5>
    </div>
        <div className="demande">
            <Circle title="Soumettre une Demande " disc="Remplissez le formulaire 
            avec les détails de votre problème
            et de votre localisation."/>
            <Circle title="Attribution d’un Agent " disc="Notre équipe examine votre demande
            et assigne des agents qualifiés
            pour la résoudre. "/>
            <Circle title="Mises à Jour & Résolution" disc=" Recevez des mises à jour régulières
            jusqu’à la résolution complète 
            de votre demande."/>
        </div >
            <div className="marg">   
                <h5> <span className="how">Services Municipaux</span> que Nous Gérons:</h5></div>
            <div className="alignrec">
            <Subsection title="Réparation des Routes " desc="Signalez des nids-de-poule,
        fissures ou routes endommagées"/>
            <Subsection title="Éclairage Public " desc="Problèmes liés aux lampadaires ou à l’éclairage public"/>
            <Subsection title="Services d’Eau" desc=" Problèmes d’approvisionnement en eau, de drainage ou d’égouts"/>
            </div>
            <div className="alignrec">
            <Subsection title="Réparation des Routes" desc=" Signalez des nids-de-poule,
        fissures ou routes endommagées"/>
            <Subsection title="Éclairage Public " desc="Problèmes liés aux lampadaires ou à l’éclairage public"/>
            <Subsection title="Services d’Eau " desc="Problèmes d’approvisionnement en eau, de drainage ou d’égouts"/>
            </div>
            <div className="marg">    <h5> Mises à Jour Récentes des Demandes:</h5>
        </div>
        <div className="update">
            <Lampa text="Avenue Oak, Près du Parc Lampadaire cassé sur l’Avenue Oak
        Dernière Mise à Jour : Lampadaire réparé et testé avec succès"/>
            
            <Lampa text="Avenue Oak, Près du Parc Lampadaire cassé sur l’Avenue Oak
        Dernière Mise à Jour : Lampadaire réparé et testé avec succès"/>
    </div>
    <div className="Vp">    <a href="./secondpage"><Button name="Voir Plus"/></a>
    </div>


        


        </>
    )
} 