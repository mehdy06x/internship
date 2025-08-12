import Button from "./Button";


export default function Accueil() {
  
    return (
        <>
            <section className="sectionacceuil">
                <div className="alignbtns">
                    <div className="Acceuilbtn"><a href="./App.tsx"><Button name="Accueil" /></a></div>
                    <div className="Reclamerbtn"><Button name="Reclamer" /></div>
                </div>
                <div className="Connectbtn">
                    <Button name="Connecter" />
                </div>
            </section>
        </>
    );
  }
