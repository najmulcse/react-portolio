import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import "./styles.css";
import SocialIcons from '../common/socialIcons';
import PortfolioDetails from '../portfolio/portfolioDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



class HomePage extends Component{

  constructor(props){
      super(props);
      this.state ={
          isLoading: true
      }
  }

  render(){
    return(
      <React.Fragment>
                  <Grid container direction="row">
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <Grid container direction="row" >
                            <Grid  item> 
                                <Avatar  alt="Remy Sharp" src="/images/profile.jpg" className="big-avatar" />
                                
                            </Grid>
                            <Typography style={{ 'marginTop': '30px'}}  fontWeight="fontWeightBold" > <span style={{ 'fontWeight': 700, 'fontSize': 38,'fontFamily': 'Montserrat sans-serif','color': '#49515a', }}> Md. M. Najmul  </span><br></br>
                                Software Engineer <br></br>
                                <SocialIcons/>
                            </Typography>
                        </Grid> 
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Button align="left" style={{ 'marginTop': '30px'}} variant="contained" color="primary" className="button">
                        Contact Me
                    </Button>
                    </Grid>
                </Grid>
                <PortfolioDetails/>
                
      </React.Fragment>
    )
  }
}
 
export default HomePage;