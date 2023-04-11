import React from 'react';
import { Grid, makeStyles,Hidden, CardContent , Card, CardMedia, CardActions } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import CustomButton from "./CustomButton";
import ProductGallery from "./ProductGallery/ProductGallery";

import { Link } from "react-router-dom";
import FaqSection from "./FaqSection";

// footer
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';
// Images and Carousel
import { DesignImages,RetailImages,InstallationImages } from "./LandingPageImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme)=>({
    root : {
        width: "100%",
        height: "70vh",
        backgroundImage: "url(/Assets/LandingPage/jk.jpg)",
        backgroundSize: "100% 100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("xs")]: {
            backgroundImage:"url(/Assets/LandingPage/jk.jpg)",
            backgroundSize: "100% 100%",
        },
    },
    heading : {
        color:"white",
        paddingTop:"5vh",
        paddingLeft:"10vw",
        fontSize:"calc(15px + 2vw)",
        [theme.breakpoints.down("xs")]: {
            paddingTop:"20vh",
            paddingLeft:"5vw"
        }
    },
  TypographyPadding: {
    paddingLeft: "10vw",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "5vw",
    },
  },
  button: {
    width: "fit-content",
    height: "fit-content",
    margin: "6vh 10vw",
    [theme.breakpoints.down("xs")]: {
      margin: "6vh 5vw",
    },
  },

  gallery: {
    margin: "auto 5vw",
    [theme.breakpoints.down("xs")]: {
      margin: "0px",
    },
  },
  themeColor: {
    color: "#E6BC36",
  },  

    firstLayer:{
        '& .MuiChip-root': {
          justifyContent: 'flex-start',
          width:"150px",
          height:"45px",
          borderRadius: "30px",
    
        }
    },
    btnRoot:{
        backgroundColor: '#ffd54f;',
        fontSize: "large",    
    },
    btnLabel:{
        color: 'white',
        padding: "2px",
    },
    card:
    {
   

        backgroundColor: "white",

        border: "2px solid black",

       
    },
    cardImg:{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: "0",
        left: "0",

    }
}))

const LandingPage = () => {
    
    const classes = useStyles();
    
    return(
        <div>
            <div className={classes.root}>
                <Typography className={classes.heading} >
                    <strong>SHOP FOR YOURSELF </strong>
                </Typography>
                <Typography className={classes.TypographyPadding} style={{ color: "white", fontSize: "calc(15px + 2vw)" }}>
                WITH THIS WEBSITE
                </Typography>
                <div className={classes.button}>
                    <Link to='/products'>
                        <CustomButton outline size="large" color="primary">
                            SHOP NOW!
                        </CustomButton>
                    </Link>   
                </div>
            </div>
            <Grid container>
                <Grid container xs="12" style={{backgroundColor:"#F2F2F2", alignItems: "center",display:"flex"}}>

                        <Card elevation={3} style={{height:"90%"}}>
                            
                                <Slider
                                dots={false}
                                arrows={false}
                                slidesToShow={4}
                                infinite={true}
                                autoplay={true}
                                autoplaySpeed={500}
                
                                pauseOnHover={true}
                               
                          
                                >
                                {
                                    RetailImages.map((image,index) => {
                                        return <div className={classes.card}>
                            
                                        <img  className='cardImg' src={image.imgLink} alt="Couldn't find "/>
                                      
                                    </div>
                                    })
                                }
                                </Slider>

                        </Card>
                    
                </Grid>
                <Grid xs="12" container style={{backgroundColor:"white",minHeight:"60vh",height:"auto"}}>    
                    {/* <Grid item xs="12" sm="6" style={{display:"flex", alignItems:"center",justifyContent:"center",padding:"5vh 5vw"}}>
                        <Card elevation={3} style={{maxWidth:"400px",width:"100%",height:"auto",border:"2px solid #ffd54f",padding:"15px 15px 15px 15px"}}>
                            <div className={classes.carouselWrapper} style={{position:"relative",width:"100%",height:"100%"}}>
                                <Slider
                                dots={false}
                                arrows={false}
                                slidesToShow={1}
                                swipeToSlide={true}
                                infinite={true}
                                autoplay={true}
                                autoplaySpeed={5000}
                                cssEase="linear"
                                >
                                {
                                    DesignImages.map((image,index) => {
                                        return <CardMedia
                                        key={index}
                                        component="img"
                                        image={image.imgLink}
                                        title="solar panel scenery"
                                        style={{width:"100%",height:320}}
                                    />;
                                    })
                                }
                                </Slider>
                            </div>
                        </Card>
                    </Grid> */}
                    {/* <Grid item xs="12" sm="12" md="6" style={{display:"flex", alignItems:"center",padding:"5vh 5vw"}}>
                        <Card elevation={0} style={{backgroundColor:"white"}}>
                            <CardContent>
                                <Typography className={classes.themeColor} style={{position:"relative",bottom:"5px"}} variant="h6" >
                                    <strong>SOLRUF</strong>
                                </Typography>
                                <Typography variant="h4" style={{color:"#4D4D4D"}}>
                                    <strong>DESIGN</strong>
                                </Typography>
                                <Typography style={{textAlign:"justify"}}>
                                Solar design is the heart of a photovoltaic system. No two designs are same for a specialized photovoltaic system due to varying environmental changes. Solar designs helps one to assess the view of the system and figure out the technicalities, feasibility of the system during installations and breaks an opaque barrier between customer and solar installers. They include 3D schematic design, Shadow analysis, Electrical SLD(Single line diagram), PV-SYST generation report, Bill of Materials, Bill of quantity.           
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Link to='/aboutus'>
                                    <CustomButton color="secondary" size="medium">Know More</CustomButton>
                                </Link>
                                <Link to='/products'>
                                    <CustomButton outline color="primary" size="medium">Shop</CustomButton>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid> */}
                </Grid>
                {/* <Grid item xs="12" container style={{minHeight:"60vh",height:"auto",backgroundColor:"#F2F2F2"}}> */}
                    {/* <Grid item xs="12" sm="12" md="6" style={{ display:"flex", alignItems:"center",padding:"5vh 5vw"}}>
                        <Card elevation={0} style={{backgroundColor:"#F2F2F2"}}>
                            <CardContent >
                                <Typography className={classes.themeColor} style={{position:"relative",bottom:"5px"}} variant="h6" >
                                    <strong>SOLRUF</strong>
                                </Typography>
                                <Typography variant="h4" style={{color:"#4D4D4D"}}>
                                    <strong>SOLAR INSTALLATIONS</strong>
                                </Typography>
                                <Typography style={{textAlign:"justify"}}>
                                Solar installation is the placement and commissioning of components of the photovoltaic system with reference to the solar design of the system. It is the most critical step in the process of solar procurement and setup. A precisely placed and well connected system reduces the per unit cost of electricity and saves cost of operation and maintenance after plant installation. We connect you with the best rated solar installers in your locality at the best value for money. PLease let us know if you have any queries regarding solar installation and process.
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Link to='/aboutus'>
                                    <CustomButton color="secondary" size="medium">Know More</CustomButton>
                                </Link>
                                <Link to='/products'>
                                    <CustomButton outline color="primary" size="medium">Shop</CustomButton>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>     */}
                    {/* <Grid item xs="12" sm="6" style={{display:"flex", alignItems:"center",justifyContent:"center",padding:"5vh 5vw"}}>
                        <Card elevation={3} style={{maxWidth:"400px",width:"100%",height:"auto",border:"2px solid #ffd54f",padding:"15px 15px 15px 15px"}}>
                            <div className={classes.carouselWrapper} style={{position:"relative",width:"100%",height:"100%"}}>
                                <Slider
                                dots={false}
                                arrows={false}
                                slidesToShow={1}
                                swipeToSlide={true}
                                infinite={true}
                                autoplay={true}
                                autoplaySpeed={5000}
                                cssEase="linear"
                                >
                                {
                                    InstallationImages.map((image,index) => {
                                        return <CardMedia
                                        key={index}
                                        component="img"
                                        image={image.imgLink}
                                        title="solar panel scenery"
                                        style={{width:"100%",height:320}}
                                    />;
                                    })
                                }
                                </Slider>
                            </div>
                        </Card>
                    </Grid> */}
                {/* </Grid> */}
            </Grid>

            <div className={classes.firstLayer}>
                <Hidden only={['xs']}>
                    <Grid container  style={{}}>
                    <Grid item xs={4} style={{backgroundColor: "#4c4c4c", borderRight: '0.15em solid #FFD05B', padding: "60px",textAlign:"center" }}>
                        <Typography variant="h3"><ThumbUpIcon color="primary" fontSize="large" /></Typography>
                        <Typography variant="h4" color="primary"><strong>2500</strong></Typography>
                        <Typography variant="body2" style={{color:"rgb(197 197 197)"}}>Happy Clients</Typography>
                    </Grid>
                    {/* <Grid item xs={3} style={{backgroundColor: "#4c4c4c", borderRight: '0.15em solid #FFD05B', padding: "60px" ,textAlign:"center" }}>
                    <Typography variant="h3"><BatteryChargingFullIcon color="primary" fontSize="large" /></Typography>
                        <Typography variant="h4" color="primary"><strong>300</strong></Typography>
                        <Typography variant="body2" style={{color:"rgb(197 197 197)"}}>Inverter Places</Typography>
                    </Grid> */}
                    <Grid item xs={4} style={{backgroundColor: "#4c4c4c",borderRight: '0.15em solid #FFD05B', padding: "60px" , textAlign:"center" }}>
                    <Typography variant="h3"><PeopleIcon color="primary" fontSize="large" /></Typography>
                        <Typography variant="h4" color="primary"><strong>120</strong></Typography>
                        <Typography variant="body2" style={{color:"rgb(197 197 197)"}}>Teammates</Typography>
                    </Grid>
                    <Grid item xs={4} style={{backgroundColor: "#4c4c4c",borderRight: '0em solid #FFD05B', padding: "60px" , textAlign:"center" }}>
                    <Typography variant="h3"><StoreIcon color="primary" fontSize="large" /></Typography>
                        <Typography variant="h4" color="primary"><strong>30</strong></Typography>
                        <Typography variant="body2" style={{color:"rgb(197 197 197)"}}>Stores</Typography>
                    </Grid>
                    </Grid>
                </Hidden>
                
            </div>
        </div>
    )
}

export default LandingPage;
