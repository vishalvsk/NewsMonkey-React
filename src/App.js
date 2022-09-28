import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
  const apiKey = `pub_11489321644015198d847893ad6d6bcb406fb`;
  const [progress, setProgress] = useState(0);
 
    return (
      <div>
       
        
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <NavBar/> 
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general"  country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business" />}></Route> 
          {/* <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>  */}
        </Routes>
      
      </div>
    )
 
}

export default App;