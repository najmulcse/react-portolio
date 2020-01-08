import React, { Component } from "react";
import { BrowserRouter , Route,Switch } from 'react-router-dom';
import { Routes } from '../Config'
import HomePage from '../components/Home';


class AppRouter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route 
                        path={Routes.HOME} 
                        component= { HomePage }
                    >   
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;

