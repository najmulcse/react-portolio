import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import SocialIcons from '../common/socialIcons';
import AboutMe from '../about/aboutMe';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 160,
      height: 160,
    },
    button: {
      margin: theme.spacing(1),
    },
  });
    function HomeContainer (props) {
      
       const  {classes}  = props;
   
   
        return ( 
        <React.Fragment>
                <Grid container direction="row">
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                        <Grid container direction="row" >
                            <Grid  item> 
                                <Avatar  alt="Remy Sharp" src="/images/profile.jpg" className={classes.bigAvatar} />
                                
                            </Grid>
                            <Typography style={{ 'margin-top': '30px'}}  fontWeight="fontWeightBold" > <span style={{ 'font-weight': 700, 'font-size': 38,'font-family': 'Montserrat sans-serif','color': '#49515a', }}> Md. M. Najmul  </span><br></br>
                                Software Engineer <br></br>
                                <SocialIcons/>
                            </Typography>
                        </Grid> 
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Button align="left" style={{ 'margin-top': '30px'}} variant="contained" color="primary" className={classes.button}>
                        Contact Me
                    </Button>
                    </Grid>
                </Grid>
                <AboutMe/>
                
                
        </React.Fragment> );
    
}
 
export default withStyles(styles) (HomeContainer);