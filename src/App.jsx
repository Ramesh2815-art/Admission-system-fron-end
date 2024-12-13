import AdmissionForm from "./pages/Admission_form";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App=()=>{
  
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<AdmissionForm />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
        <Footer/>
        
        
    </>
  )
}

export default App;

