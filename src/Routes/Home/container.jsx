import React, {Component} from 'react';
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import Header from '../../components/common/header';
import Navbar from '../../components/common/navbar';

class HomePage extends Component{

  constructor(props){
      super(props);
      this.state ={
          isLoading: true,
          value: ''
      }
  }
  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  }
  render(){
    return(
      <React.Fragment>
           <Header/>
           <Navbar/>
      </React.Fragment>
    )
  }
}
 
export default HomePage;