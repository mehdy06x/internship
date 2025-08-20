import Footer from "./footer";
import Header from "./header";
import './App.css';
import AdminSection from "./adminsection";
import './adminpage.css';

export default function AdminDashboard() {
  return (
    <div>
      <Header/>
      <div className="admin-dashboard">
      
      </div>
      <AdminSection/>
      <Footer/>
    </div>
  )



}

