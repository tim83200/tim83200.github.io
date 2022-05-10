import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Accueil from './accueil/AccueilJA';
import Navbar from './navbar/NavbarJA';
import Contacts from './contacts/ContactsJA';
import Sculptures from './sculptures/SculptureJA';
import Salons from './salons/SalonsJA';
import Figuratif from './figuratif/Figuratif';
import LigneClaire from './ligneClaire/LigneClaire';
import Bronzes from './bronzes/BronzeJA';
import Footer from './footer/FooterJA';
import Insitu from './inSitu/inSitu';
import Error from './error/error.js'

const App = () => {

    return (

        <div className="App">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Accueil}/>
                    <Route path="/joel-arfi" exact component={Accueil}/>
                    <Route path="/Accueil" exact component={Accueil}/>
                    <Route path="/Bronzes" exact component={Bronzes}/>
                    <Route path="/Sculptures" exact component={Sculptures}/>
                    <Route path="/Figuratif" exact component={Figuratif}/>
                    <Route path="/LigneClaire" exact component={LigneClaire}/>
                    <Route path="/InSitu" exact component={Insitu}/>
                    <Route path="/Salons" exact component={Salons}/>
                    <Route path="/Contacts" exact component={Contacts}/>
                    <Route component={Error}/>
                </Switch>
            </Router>


        <Footer/>
      </div>
    )
}   

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;