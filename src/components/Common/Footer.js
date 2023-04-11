import { Grid, makeStyles, Hidden,Typography} from "@material-ui/core";
import {React} from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  firstLayer: {
    "& .MuiChip-root": {
      justifyContent: "flex-start",
      width: "150px",
      height: "45px",
      borderRadius: "30px",
    },
  },
  root: {
    paddingTop: "20px",
    paddingRight: "50px",
    paddingLeft: "50px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5px",
      paddingRight: "25px",
      paddingLeft: "5px",
      textAlign: "left",
    },
    backgroundColor: "#4D4D4D",
    position: "static",
  },
  btnRoot: {
    backgroundColor: "#ffd54f;",
    fontSize: "large",
  },
  btnLabel: {
    color: "white",
    padding: "2px",
  },
  dbox: {
    width: "100%",
    padding: "0px 20px",
  },
  icon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%;",
    margin: "0 auto",
    marginBottom: "20px",
  },
  text: {
    textDecoration: "none",
    color: "#ffd54f",
    "&:hover": {
      color: "black",
    },
    "& text:visited": {
      textDecoration: "none",
    },
  },
  card: {
    background: "#e8edf0",
    margin: "5%",
    "& .MuiGrid-item": {
      padding: "2%",
    },
    "& .MuiGrid-item-12": {
      padding: "1%",
    },
  },
  textfile: {
    backgroundColor: "white",
    border: "0px",
    margin: "4%",
  },
  sendbtn: {
    backgroundColor: "#ffd54f",
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: "#ffd54f"}} className={classes.firstLayer}>
      
      {/* <Hidden smUp> => mobile view  | Hidden xsDown => web view*/}
      <div className={classes.root} style={{ backgroundColor: "#3f3f3f" }}>
        <Grid
          container
          className={classes.root}
          style={{ backgroundColor: "#3f3f3f", padding: "30px 0px" }}
          justify="center"
        >
          <Grid item xs={12} md={2} className={classes.dbox}>
            <div>
              {/* <Hidden xsDown> */}
              <div style={{ textAlign: "center" }}>
                <Link to="/">
                  <img src="/Assets/HeaderFooter/ORIGINAL_SOLRUF_ANIMATED_LOGO_COMPLEMENTARY.gif" alt="logo" style={{ height: "45px" }} />
                </Link>
                <div style={{ textAlign: "center" }}>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.fieo.org/certificateview.php?memberfieo2009token=OvC4etKfCP_116295"
                    >
                      <img border="0" style={{ width: "150px", objectFit: "cover" }} src="/Assets/HeaderFooter/fieo.png" alt="logo-img" />
                    </a>
                  </p>
                </div>
              </div>
              {/* </Hidden> */}
              <Hidden smUp>
                <Grid container style={{ marginTop: "20px" }}>
                  <Grid item xs={2} style={{ margin: "auto" }}>
                    <Typography variant="body1">
                      <b>
                        <span>
                          <LocationOnIcon color="primary" fontSize="large" />
                        </span>
                      </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <a
                        className={classes.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/place/SOLRUF+INDIA+PRIVATE+LIMITED/@20.9254651,77.7606604,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd6a5461a71e8bd:0x5875e325aa9d0b11!8m2!3d20.9254601!4d77.7628491"
                      >
                        Agarwal Bunglaw, Behind Atul Mangal Karyalaya, Rukmini Nagar, Amravati, Maharashtra, India,
                        444606
                      </a>
                    </p>
                  </Grid>
                </Grid>
              </Hidden>
            </div>
          </Grid>
          {/* Blog */}
          <Grid item xs={12} md={2} className={classes.dbox}>
            <div>
              <Hidden smUp>
                <Grid container>
                  <Grid item xs={2} style={{ margin: "auto" }}>
                    <Typography variant="body1">
                      <b>
                        <span>
                          <CallIcon color="primary" fontSize="large" />
                        </span>
                      </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <a className={classes.text} href="tel://+919932383997">
                        +919932383997
                      </a>
                    </p>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <div>
                  <Typography variant="body2" style={{ color: "white" }}>
                    INFORMATION
                    <hr
                      style={{
                        width: "25%",
                        marginLeft: 0,
                        color: "#FFD05B",
                        height: "3px",
                        backgroundColor: "#FFD05B",
                        border: "none",
                        marginTop: 0,
                      }}
                    ></hr>
                  </Typography>
                  <Link to="/">
                    <div className={classes.text}>Home Page</div>
                  </Link>
                </div>
              </Hidden>
            </div>
          </Grid>

          {/* Help us web */}
          <Grid xs={12} item md={2} className={classes.dbox}>
            <Hidden only={["xs"]}>
              <div>
                <Typography variant="body2" style={{ color: "white" }}>
                  HELP
                  <hr
                    style={{
                      width: "25%",
                      marginLeft: 0,
                      color: "#FFD05B",
                      height: "3px",
                      backgroundColor: "#FFD05B",
                      border: "none",
                      marginTop: 0,
                    }}
                  ></hr>
                </Typography>
                <Link to="/contact">
                  <div className={classes.text}>Contact Us</div>
                </Link>
              </div>
            </Hidden>
          </Grid>
          {/* Legal web */}
          <Grid xs={12} item md={2} className={classes.dbox}>
            <div>
              <Hidden xsDown>
                <div>
                  <Typography variant="body2" style={{ color: "white" }}>
                    LEGAL
                    <hr
                      style={{
                        width: "25%",
                        marginLeft: 0,
                        color: "#FFD05B",
                        height: "3px",
                        backgroundColor: "#FFD05B",
                        border: "none",
                        marginTop: 0,
                      }}
                    ></hr>
                  </Typography>
                  <div>
                    <Link to="/termsandconditions" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Terms And Conditions</div>
                    </Link>
                    <Link to="/shippingpolicy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Shipping Policy</div>
                    </Link>
                    <Link to="/returnpolicy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Return Policy</div>
                    </Link>
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Privacy Policy</div>
                    </Link>
                  </div>
                </div>
              </Hidden>
            </div>
          </Grid>
          {/* Follow us web*/}
          <Grid item xs={12} md={2} className={classes.dbox}>
            <div>
              <Hidden smUp>
                <Grid container>
                  <Grid item xs={2} style={{ margin: "auto" }}>
                    <Typography variant="body1">
                      <b>
                        <span>
                          <TelegramIcon color="primary" fontSize="large" />
                        </span>
                      </b>
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <p>
                      <a className={classes.text} href="mailto:sumo@solruf.com">
                        sumo@solruf.com
                      </a>
                    </p>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden xsDown>
                <div>
                  <Typography variant="body2" style={{ color: "white" }}>
                    FOLLOW US
                    <hr
                      style={{
                        width: "25%",
                        marginLeft: 0,
                        color: "#FFD05B",
                        height: "3px",
                        backgroundColor: "#FFD05B",
                        border: "none",
                        marginTop: 0,
                      }}
                    ></hr>
                  </Typography>
                  {/* Added Social icons to help also renamed to follow us  */}
                  <span>
                    <a
                      className={classes.text}
                      href="https://www.linkedin.com/company/solruf-india-private-limited/about/?viewAsMember=true
                        "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="large" />
                    </a>
                    <a
                      className={classes.text}
                      href="https://www.facebook.com/solrufco"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon fontSize="large" />
                    </a>
                    <a
                      className={classes.text}
                      href="https://www.youtube.com/channel/UCwQlCuStfqD7eP_rxAsYs6w"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon fontSize="large" />
                    </a>
                    <a
                      className={classes.text}
                      href="https://www.instagram.com/solrufco/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon fontSize="large" />
                    </a>
                  </span>
                </div>
              </Hidden>
            </div>
          </Grid>

          {/* mobile view */}
          <Grid xs={12} item md={2}>
            <Hidden smUp>
              <Grid container>
                <Grid item xs={6} style={{ margin: "auto" }}>
                  <div className={classes.dbox}>
                    <Link to="/termsandconditions" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Terms And Conditions</div>
                    </Link>
                    <Link to="/shippingpolicy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Shipping Policy</div>
                    </Link>
                    <Link to="/returnpolicy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Return Policy</div>
                    </Link>
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                      <div className={classes.text}>Privacy Policy</div>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center" }}>
                  <div>
                    <p style={{ color: "#ffd54f" }}>
                      <b>
                        <span>Follow Us</span>
                      </b>
                    </p>
                    <span>
                      <a
                        className={classes.text}
                        href="https://www.linkedin.com/company/solruf-india-private-limited/about/?viewAsMember=true
                        "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon fontSize="large" />
                      </a>
                      <a
                        className={classes.text}
                        href="https://www.facebook.com/solrufco"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon fontSize="large" />
                      </a>
                      <a
                        className={classes.text}
                        href="https://www.youtube.com/channel/UCwQlCuStfqD7eP_rxAsYs6w"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon fontSize="large" />
                      </a>
                      <a
                        className={classes.text}
                        href="https://www.instagram.com/solrufco/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon fontSize="large" />
                      </a>
                    </span>
                  </div>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid container>
                <Grid item xs={2} style={{ margin: "auto" }}>
                  <Typography variant="body1">
                    <b>
                      <span>
                        <LocationOnIcon color="primary" fontSize="large" />
                      </span>
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <p style={{ marginTop: "0px" }}>
                    <a
                      className={classes.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/SOLRUF+INDIA+PRIVATE+LIMITED/@20.9254651,77.7606604,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd6a5461a71e8bd:0x5875e325aa9d0b11!8m2!3d20.9254601!4d77.7628491"
                    >
                      Agarwal Bunglaw, Behind Atul Mangal Karyalaya, Rukmini Nagar, Amravati, Maharashtra, India, 444606
                    </a>
                  </p>
                </Grid>
                {/* Added mail */}
                <Grid item xs={2} style={{ margin: "auto" }}>
                  <Typography variant="body1">
                    <b>
                      <span>
                        <TelegramIcon color="primary" fontSize="large" />
                      </span>
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <p>
                    <a className={classes.text} href="mailto:sumo@solruf.com">
                      sumo@solruf.com
                    </a>
                  </p>
                </Grid>

                <Grid item xs={2} style={{ margin: "auto" }}>
                  <Typography variant="body1">
                    <b>
                      <span>
                        <CallIcon color="primary" fontSize="large" />
                      </span>
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <p>
                    <a className={classes.text} href="tel://+919932383997">
                      +919932383997
                    </a>
                  </p>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </div>
      {/* <div style={{ textAlign: "center", backgroundColor: "#ffd54f", paddingBottom: "10px", color: "#4D4D4D" }}>
        <Hidden only={["xs"]}>
          <p>
            &copy;<b> SOLRUF INDIA PRIVATE LIMITED</b>. All Rights Reserved
          </p>
        </Hidden>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <p style={{ marginBottom: "5px" }}>
            &copy;<b> SOLRUF INDIA PRIVATE LIMITED</b>.
          </p>
          <p style={{ margin: "0px" }}>All Rights Reserved</p>
        </Hidden>
      </div> */}
    </div>
  );
};

export default Footer;
