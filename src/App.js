import React from 'react';
import './App.css';
import TabPage from "./componants/Tabpage";
import Sponsors from "./componants/sponsors";


function App() {
    return ( < div className = "App" >
        <header className = "App-header" >
        <div className = "LogoText" > Poly Praise AZ </div> 
        </header> 
        <div className="App-Body"> 
        <TabPage />
        <div className="sponsor_content">
        <h2 className='sponsor-title'>Thank you Sponsors!</h2>
        <Sponsors />
        </div>
        </div> 
        </div >
    );
}

export default App;