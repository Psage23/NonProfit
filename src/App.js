import React from 'react';
import './App.css';
import Home from './componants/home';
import TabPage from "./componants/Tabpage";
import Sponsors from "./componants/sponsors";


function App() {
    return ( 
    < div className = "App" >
        <header className = "App-header" >
            <TabPage />
            <div className = "LogoText" > Poly Praise AZ </div> 
        </header> 
        <div className="App-Body"> 
            <Home />
            <div className="main">
                <h1>Welcome!</h1>
                <p>Non-Profit Organization to help Arizona Foster children and youth.</p>
            </div>
            <div className="sponsor_content">
                <h2 className='sponsor-title'>Thank you Sponsors!</h2>
                <Sponsors />
            </div>
            <div className="PageFooter">
                <p className="FooterText">© Copyright 2019 Poly Praise AZ </p>
            </div>
        </div> 
    </div >
    );
}

export default App;