import './secondpage.css';
import { useState } from 'react';

export default function ChangeEtat() {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState('Choisir l\'état');
  const options = ["En cours de", "Résolue", "Pas encore"];

  function handleSelect(option: string) {
    setSelected(option);
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
                  selected === "Résolue" ? "#B1FAB3" :
                  selected === "En cours de" ? "#FFD580" :
                  selected === "Pas encore" ? "#FFB3B3" : "#fff",
                color:
                  selected === "Résolue" ? "#217a2c" :
                  selected === "En cours de" ? "#b26a00" :
                  selected === "Pas encore" ? "#a80000" : "#58A0C8",
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
              {selected}
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
