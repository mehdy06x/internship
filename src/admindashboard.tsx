import Footer from "./footer";
import Header from "./header";
import './App.css';
import AdminSection from "./adminsection";
import AligningButtons from "./aligningbuttons";

export default function AdminDashboard() {
  return (
    <div>
      <Header/>
      <AligningButtons/>
      <AdminSection/>
      <Footer/>
    </div>
  )



}

