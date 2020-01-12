import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Card, CardContent} from '@material-ui/core';
import './style.css';
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import RemoveIcon from '@material-ui/icons/Remove';
import Input from '@material-ui/core/Input';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid landing-hero">
        <div className={classes.root } className="nav-cover">
          <AppBar position="static" className="header-cover" >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="off"
              aria-label="scrollable prevent tabs example"
            >
              <Tab label="Flight" className="flight-button" icon={<FlightIcon />} aria-label="flight" {...a11yProps(0)} />
              <Tab label="Hotel" icon={<HotelIcon />} aria-label="hotel" {...a11yProps(1)} />
              <Tab label="Deal" icon={<CalendarTodayIcon />} aria-label="deal" {...a11yProps(2)} />
            
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} >
            <Card className="flight-card">
                <CardContent>
                  <Typography component="div">
                  <Box fontWeight={500} fontSize={24} m={1}>
                      Search for Cheap Flights
                  </Box>
                </Typography>
                <div className="p-2 m-2">
                  <Button className="p-1" variant="contained" color="secondary">
                    Round Trip
                  </Button>
                  <Button variant="contained" color="primary">
                  One Way
                </Button>
              </div>
              <div className="w-100 depart-arrival-cover" >
                  <div className="w-50">
                    <Typography>From</Typography>
                    <TextField
                      id="outlined-secondary"
                      label="City, location..."
                      variant="outlined"
                      color="secondary"
                    />
                  </div>
                  <div className="w-50">
                    <Typography>To</Typography>
                    <TextField
                      id="outlined-secondary"
                      label="City, location..."
                      variant="outlined"
                      color="secondary"
                    />
                  </div>
              </div>
              <div className="w-100 depart-arrival-cover" >
                  <div className="w-50">
                    <Typography>Depart Date</Typography>
                    <TextField
                      id="outlined-secondary"
                      variant="outlined"
                      color="secondary"
                      type="date"
                    />
                  </div>
                  <div className="w-50">
                    <Typography>Arrival Date</Typography>
                    <TextField
                      id="outlined-secondary"
                      variant="outlined"
                      color="secondary"
                      type="date"
                    />
                  </div>
              </div>
              <div className="w-100 depart-arrival-cover" >
                  <div className="w-50">

                    <Typography>Passengers </Typography>
                    <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                  </Fab>
                  <TextField id="standard-basic"  disabled  label="" />
                  <Fab size="small" color="secondary" aria-label="add">
                    <RemoveIcon />
                  </Fab>
                  </div>
                  <div className="w-50">
                    
                  </div>
              </div>
              <div className="w-100 pt-3">
                  <Button variant="contained" color="secondary">
                  Search for flights
                </Button>
              </div>
            </CardContent>
                </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Hotel
          </TabPanel>
          <TabPanel value={value} index={2}>
            Deal
          </TabPanel>
        </div>
    </div>
  );
}