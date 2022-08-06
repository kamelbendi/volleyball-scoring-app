import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'


//components
/* import Header from './Components/Header';
import Main from './Components/Main';
import Events from './Components/Events'; */
/* import Login from './Components/Login/Login.js'; */
import SignUp from './Components/SignUp/SignUp.js';
import Login from './Components/Login/Login';
/* import SignUp from './Components/SignUp/SignUp.js'; */

/* import { useStateValue } from './state/Provider' */

function App() {
  /* const [{ user }, dispatch] = useStateValue(); */

  return (
    <div className="App"> 
      { 
        <Container className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
        >
          <div className="w-100" stule={{maxWidth: "400px"}}>
            <SignUp  />
            
          </div>

        </Container>
        /* : (
          <>
          {dispatch()}
            {console.log(user)}
            <Header />
            <div className="appBody">
              <Main />
              <Events />
            </div>
          </>
        ) */
      }
    </div>
  );
}


export default App;