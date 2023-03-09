import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "./ToText";
// import moment from "moment";
import { Link, withRouter } from "react-router-dom";
import {  Grid, Typography} from '@material-ui/core';
import {Card , CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    minHeight: 500,
    maxHeight: 500,
    padding: '1%',
  },
  media: {
    height: 200,
  },
  cardContent:{
    minHeight: 250,
    maxHeight: 250,
  },
  buttongroup:{
    display: 'flex',
    alignItems: 'center',
    '& > *': {
    color: "#fff",
    fontWeight: 'bold',
    },
  },
}));

function ShowBlog(props, p) {
  const classes = useStyles();
  return (
    // <Grid container>
<>
    <Grid item xs={12} md={4} style={{marginBottom: 30}}>
            <Card className={classes.card}>
              
                <CardActionArea>  
                           
                    <CardMedia
                        className={classes.media}
                        image =  
                            {props.thumbnail ? props.thumbnail : '/product/default-img.jpg' }
                        title={props.title}
                        style={{cursor:'zoom-in'}}
                    />    
                   
                    <CardContent className={classes.cardContent}>
                             <Link
                              to={props.title}
                              className={c.textfiordblue}

                            >
                            <Typography color="secondary" gutterBottom variant="h6" component="h2" >
                            <b>{props.title}</b>
                            </Typography>                                                          
                            <Typography variant="h6" component="h6" style={{color: "black"}}>
                            <p className={c.cardText}>{`${ToText(
                              props.description.substring(0, 15000)
                            )}.......`}</p>
            
                            </Typography>
                        </Link>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <span className="text-dark">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="user"

                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height="20"
                    color="#FFD05B"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    ></path>
                  </svg>
                  &nbsp;
                  {props.author}
                </span>
                </CardActions>
            </Card>

              
        <br></br>    
        </Grid>
    </>
  );
}

export default withRouter(ShowBlog);
