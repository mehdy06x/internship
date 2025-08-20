import './secondpage.css';
import { useState } from 'react';

type ChangeEtatProps = {
  etat: string;
  onStatusChange: (newStatus: string) => void;
};

export default function ChangeEtat({ etat, onStatusChange }: ChangeEtatProps) {
  const [showOptions, setShowOptions] = useState(false);
  const options = ["En cours de", "Résolue", "Pas encore"];

  function handleSelect(option: string) {
    onStatusChange(option);
    setShowOptions(false);
  }

  return (
    <div className='bgcolor'>
      <div className="lamptout">
        <div className='lampbutton'>
          <h4>Lampadaire</h4>
          <div style={{ position: "relative" }}>
            <button
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                background:
                  etat === "Résolue" ? "#B1FAB3" :
                  etat === "En cours de" ? "#FFD580" :
                  etat === "Pas encore" ? "#FFB3B3" :
                  etat === "État du report" ? "#eee" : "#fff",
                color:
                  etat === "Résolue" ? "#217a2c" :
                  etat === "En cours de" ? "#b26a00" :
                  etat === "Pas encore" ? "#a80000" :
                  etat === "État du report" ? "#888" : "#58A0C8",
                fontWeight: 500,
                cursor: "pointer",
                minWidth: 120,
                transition: "background 0.2s, color 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
              }}
              onClick={() => setShowOptions((v) => !v)}
            >
              {etat === "État du report" ? "État du report (à définir)" : etat}
            </button>
            {showOptions && (
              <div style={{
                position: "absolute", top: "110%", left: 0, background: "#fff", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", zIndex: 10
              }}>
                {options.map(option => (
                  <div
                    key={option}
                    style={{ padding: "8px 24px", cursor: "pointer", color: "#2D2B2B", fontWeight: 500 }}
                    onClick={() => handleSelect(option)}
                    onMouseDown={e => e.preventDefault()}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <p>
          Avenue Oak, Près du Parc
          <br /> Lampadaire cassé sur l’Avenue Oak
        </p>
        <p>
          <span className='bold'>Dernière Mise à Jour</span> : Lampadaire réparé et testé avec succès
        </p>
      </div>
    </div>
  );
}
