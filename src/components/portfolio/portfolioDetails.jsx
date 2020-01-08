import React, { Component } from 'react';
import "./style.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';
import SchoolIcon from '@material-ui/icons/School';
import AllStarsRateIcon from '../common/allStartsRateIcon';
import Projects from '../project/projects';
import Galary from '../galary';
import {BorderLinearProgress} from '../../Progress/LinearBorderProgress';
import {Link } from 'react-router-dom';


class PortfolioDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Grid container direction="row">
                        <Grid item xs={12} sm={8} md={8} lg={8} className="padding_15">
                            <Card className="card">
                                <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            About Me
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        Full Stack Web Developer, specialized in (PHP) Laravel MVC Framework, Python (django), SQL Server, Payment Gateway, Entity Framework, Web API,SOAP API.

                                                Experience in analysis, design and development of web based application with Agile approach. Expert in developing web applications.

                                                •Web scrapping using Python(django)
                                                • Proficient in Web Services, Javascript, jQuery, Vuejs, Bootstrap, Ajax, IntercoolerJS, HTML5, CSS3.
                                                • Effective in working independently and collaboratively in teams.
                                                • Expert in Building, Deploying and Maintaining Web application
                                                • Expert in git version control system
                                                • Ability to understand client requirement and provide the best solution.
                                                • Strong trouble shooting and problem solving skills
                                                • Ability to effectively express ideas
                                                • Telco, VAS, GDS Flight API - Amadeus
                                                • Implemented TBO Holidays Soap API (Hotel booking system)
                                                • Goal oriented, self-motivated and committed to the successful outcome of the project.

                                                *Looking for better opportunity with latest technology.
                                        </Typography>
                                    </CardContent>
                        
                            </Card>
                            
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} className="padding_15">
                            <Card className="root">
                                    <CardContent className="padding_15">
                                                <List component="nav" aria-label="location email website">
                                                    <ListItem >
                                                        <ListItemIcon>
                                                            <LocationOnIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Dhaka, Bangladesh" />
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemIcon>
                                                            <EmailIcon />
                                                        </ListItemIcon>
                                                        <ListItemText secondary="dev.najmul@gmail.com" />
                                                    </ListItem>
                                                    <ListItem >
                                                        <ListItemIcon>
                                                            <LinkIcon />
                                                        </ListItemIcon>
                                                        <Link to="">
                                                            <ListItemText secondary="https://www.najmul.leaddevs.com" onClick={ () => window.location ='https://www.najmul.leaddevs.com'} />
                                                        </Link>
                                                    </ListItem>
                                                </List>
                                    </CardContent>
                                    
                            </Card>
                        </Grid>  
                              
                        <Grid item  xs={12} sm={8} md={8} lg={8} className="padding_15">
                            <Projects/>
                        </Grid>  
                        <Grid item xs={12} sm={4} md={4} lg={4} className="padding_15"> 
                            <Card className="root" m={2}> 
                                    <CardContent>
                                        <Typography variant="h5"  align="left">
                                            Skills
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2"  align="left">
                                            Python, django
                                        </Typography>
                                        <BorderLinearProgress
                                                        className=""
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={50}
                                                        valueBuffer={100}
                                        />
                                        <br/>
                                        <Typography variant="body1"  align="left">
                                            PHP, Laravel
                                        </Typography>
                                        <BorderLinearProgress
                                                        className=""
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={90}
                                                        valueBuffer={90}
                                        />
                                        <br/>
                                        <Typography variant="body1"  align="left">
                                            React JS
                                        </Typography>
                                        
                                        <BorderLinearProgress
                                                        className=""
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={60}
                                                        valueBuffer={60}
                                        />
                                        <br/>
                                            <Typography variant="body1"  align="left">
                                            API Development(SOAP,REST)
                                        </Typography>
                                        <BorderLinearProgress
                                                        className=""
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={100}
                                                        valueBuffer={100}
                                        />
                                    </CardContent>           
                        </Card>
                        </Grid>
                    <Grid item  xs={12} sm={8} md={8} lg={8} className="padding_15">
                        <Galary/>
                    </Grid >
                    <Grid item  xs={12} sm={4} md={4} lg={4} className="padding_15">     
                            <Card className="margin_bottom" m={2}>
                                    <CardContent>
                                            <Typography variant="h5"  align="left">
                                                Education
                                            </Typography>
                                            <List component="nav" aria-label="Graduate">
                                                <ListItem >
                                                    <ListItemIcon>
                                                        <SchoolIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="BSc in Computer Science & Engineering"  secondary="University of Rajshahi(2012-2016)"/>
                                                </ListItem>
                                            
                                            </List>
                                        </CardContent>
                                
                            </Card>
                            <Card className="root" m={2}>
                                <CardContent>
                                    <Typography variant="h5"  align="left">
                                        Languages
                                    </Typography>
                                    <List component="a" aria-label="Language">
                                        <ListItem >
                                            <ListItemText p={0} m={0}  primary="English:Professional proficiency" secondary={<AllStarsRateIcon counts="4"  color="primary"/> }/>
                                        </ListItem>
                                    </List>
                                        <List component="a"aria-label="Language">
                                        <ListItem  >
                                            <ListItemText  p={0} m={1} primary="Bangla:Native" secondary={<AllStarsRateIcon counts="5" color="primary" /> }/>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
                
                
            </React.Fragment> 
         );
    }
}
 
export default PortfolioDetails;
 