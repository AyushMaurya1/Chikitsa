import './App.css';
import  Homepage  from './components/HomePage/Homepage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import ImageUpload from './components/pcos-detection/ImageUpload';
import Result from './components/pcos-detection/Result'
import ImageUpload2 from './components/breastcancer_detection/ImageUpload_bcd';
import Result2 from './components/breastcancer_detection/Result_bcd';
import Chatbot from './components/chatbot2/Chatbot';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const [loginUser, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Default route */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/patient-dashboard" element={<PatientDashboard/>}/>
          <Route path="/upload" element={<ImageUpload/>}/> 
          <Route path="/result" element={<Result/>}/> 
          <Route path="/upload_bcd" element={<ImageUpload2/>}/>
          <Route path="/result_bcd" element={<Result2/>}/>
          <Route path="/chat" element={<Chatbot/>}/> {/* Chatbot */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
