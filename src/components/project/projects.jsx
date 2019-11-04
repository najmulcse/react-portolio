import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <React.Fragment>
         <Grid container  direction="row" >
           <Grid xs={12} sm={6} md={6} lg={6}>
           <Card className={classes.card}>
            <Link onClick ={() => window.location = 'https://www.ghurbo.com'} >
              <CardMedia
                className={classes.media}
                image="/images/ghurbo.png"
                title="Ghurbo"
              />
            </Link>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Ghurbo is an online travel agency created to empower Bangladeshi traveler through an
              AI-powered travel technology that exponentially reduces the time and effort required to
              plan and book leisure or business travel.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                
                <Typography variant="body2" color="textSecondary" component="p">
                Using the inventory of hotels, tour packages, bus,
                train and flight information, Ghurbo.com works as a virtual travel manager, facilitating for
                travel search, compare and book or payout instantly. Furthermore, using the Ghurbo.com
                search feature, users can even create their own travel plan. Ghurbo.com also comes with a
                mobile app allowing users to find nearby tourist spots based on their current location. In
                addition, it recommends travelers on good places with great deals, what to eat and exciting
                activities to do wherever you are! As an essential, Ghurbo.com ensures secured travelling by
                providing travel insurance coverage. Currently, Ghurbo.com is offering hotel deals and
                travel packages within Bangladesh for all Bangladeshi travelers.
                </Typography>
                
              </CardContent>
            </Collapse>
          </Card>
   
           </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
          <Card className={classes.card}>
              <Link   onClick ={() => window.location = 'https://coffeeadda.app/web'}>  
                <CardMedia
                  className={classes.media}
                  image="/images/coffee.jpg"
                  title="Coffee Adda"
                />
              </Link>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                People wants more simplified solution to get connected with unknowns. Everyone prefer easy solution to reach new friends and connect them easily. Coffee is yet another, but fresh crowd where anyone 
                can find friend 
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  
                  <Typography variant="body2" color="textSecondary" component="p">
                  from a huge collection of local peoples Local people not feel so comfortable with existing international solutions. No platform offer local payment solution for extensive networking.

                      Features:
                      - Photo profile
                      - Location based Matchmaking
                      - LOVE, LIKE, dislike
                      - In app chat with matched people
                      - Subscription for premium version
                      - Easy onboarding

                      So, make and meet friends nearby!
                  </Typography>
                  
                </CardContent>
              </Collapse>
            </Card>
          </Grid>

         </Grid>
      </React.Fragment>
  );
}