import React, { Component } from 'react';
// import {Switch, Redirect } from 'react-router-dom';
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import HomeContainer from '../components/Home';
import { SnackbarProvider } from 'notistack';
// import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import AppRouter from '../Routes';
import { COLOR_THEME } from '../Config';
import { Provider } from 'react-redux';
import store from '../Redux/Store';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        {/* Notification  */}
        <SnackbarProvider preventDuplicate>
          {/* Custom theme */}
          <MuiThemeProvider theme={COLOR_THEME}> 
            { /* redux store */}
            <Provider store={store}>
              <AppRouter/>
            </Provider>
          </MuiThemeProvider>
        </SnackbarProvider>
      </React.Fragment>
    );
  }
  
}

export default App;
