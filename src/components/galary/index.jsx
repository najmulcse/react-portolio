import React, {Component } from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

const tileData = [
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     },
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     },
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     },
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     },
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     },
     {
        img: '/images/profile.jpg',
        title: 'Image',
        author: 'author',
        cols: 4,
     }
    ];
  
export default function Galary() {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Typography gutterBottom variant="h5" component="h2">
                        Galary
                </Typography>
                <div className={classes.root}>
                
                <GridList cellHeight={160} className={classes.gridList} cols={12}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    ))}
                </GridList>
                </div>
            </React.Fragment>
          );
}
 