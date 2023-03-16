import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckResults from './components/CheckResults';
import Results from './components/Results';
import ReadResult from './components/CRUD/ReadResult';
import Clientlist from './components/Clientlist';
import MainScreen from './components/MainScreen';
import CheckAppointment from './components/CheckAppointment';


function App() {
  return (
    <div className="App">
        <Nav/>
        
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='checkresults' element={<CheckResults />} />
            <Route path='results' element={<Results />} />
            <Route path='clientlist' element={<Clientlist />} />
            <Route path='checkappointment' element={<CheckAppointment />} />
            
          </Routes>
        
    </div>
  );
}

export default App;
