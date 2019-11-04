import React from 'react';
import {Switch,Route, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeContainer from './components/Home/container';



function App() {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <HomeContainer/>    
        <Switch>          
        <Redirect from="/" to="/" exact></Redirect>
        </Switch>   
      </Container>
    </React.Fragment>
  );
}

export default App;
