
import { useState } from 'react';
import ChangeEtat from './changeEtat';
import './secondpage.css';
import './adminpage.css';
type Report = { id: number; status: string };

export default function AdminSection() {
  const [reports, setReports] = useState<Report[]>([
    { id: 1, status: "En cours de" },
    { id: 2, status: "Résolue" },
    { id: 3, status: "Pas encore" },
  ]);
  const [filter, setFilter] = useState<string>("Tout");

  function addReport() {
    setReports([...reports, { id: reports.length + 1, status: "État du report" }]);
  }

  const filteredReports = filter === "Tout"
    ? reports
    : reports.filter(r => r.status === filter);

  function handleStatusChange(id: number, newStatus: string) {
    setReports(reports => reports.map(r => r.id === id ? { ...r, status: newStatus } : r));
  }

  return (
    <>
      <div className="background">
        <div className="nrecltitle">
          <h4>Les Reclamations :</h4>
          <p> l'état des demandes soumises </p>
        </div>
        <div className="filter-reports">
          <button className={"filter-tout" + (filter === "Tout" ? " active" : "")}
            onClick={() => setFilter("Tout")}>Tout</button>
          <button className={"filter-encours" + (filter === "En cours de" ? " active" : "")}
            onClick={() => setFilter("En cours de")}>En cours de</button>
          <button className={"filter-resolue" + (filter === "Résolue" ? " active" : "")}
            onClick={() => setFilter("Résolue")}>Résolue</button>
          <button className={"filter-pasencore" + (filter === "Pas encore" ? " active" : "")}
            onClick={() => setFilter("Pas encore")}>Pas encore</button>
        </div>
        {filteredReports.map(r => (
          <ChangeEtat
            key={r.id}
            etat={r.status}
            onStatusChange={newStatus => handleStatusChange(r.id, newStatus)}
            isInitial={r.status === "État du report"}
          />
        ))}
        <div className='show-all-reports-button-container'>
          <button
            className="show-all-reports-button" 
            onClick={addReport}
          >
            afficher toutes les réclamations
          </button>
        </div>
      </div>
    </>
  );
}
