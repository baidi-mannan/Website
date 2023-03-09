import React, { useState } from "react";
import { Typography, makeStyles, Link, useMediaQuery, IconButton, Divider, Grid } from "@material-ui/core";
import clsx from "clsx";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "4rem",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  title: {
    backgroundColor: "rgb(249,249,249)",
  
  },
  titleVision: {
    backgroundColor: "#4D4D4D",
    color: "rgb(255,255,255)",
    "& .MuiTypography-h4": {
      marginBottom: "1.5rem",
      lineHeight: 1.6,
    },
    [theme.breakpoints.down("xs")]: {
      lineHeight: 1.8,
    },
  },
  navTab: {
    display: "flex",
    backgroundColor: "#ffd05b",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 4rem",
    height: "7rem",
    "& .MuiLink-root": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 2rem",
      height: "5rem",
    },
  },
  navContent: {
    minHeight: "400px",
    backgroundColor: "rgb(255,255,255)",
  },
  titleFeatures: {
    backgroundColor: "#4D4D4D",
    color: "rgb(255,255,255)",
    "& .MuiTypography-h3": {
      marginBottom: "2rem",
    },
    "& .MuiTypography-h4": {
      marginBottom: "1.5rem",
    },
  },
  team: {
    backgroundColor: "#ffd05b",
    color: "#4d4d4d",
  },
  notSelectable: {
    webKitUserSelect: "none",
    webkitTouchCallout: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
}));

// Team members of the company
const teamMembers = [
  {
    name: "Sumit Aggarwal",
    position: "Chief Executive Officer",
    photo: "/Assets/AboutUs/Team/SumitSir.jpeg",
    linkedInUrl: "https://in.linkedin.com/in/sumit-agarwal-322969102",
  },
  {
    name: "Pawan Aichra",
    position: "Web Development Core Team Member",
    photo: "/Assets/AboutUs/Team/PawanSir.jpeg",
    linkedInUrl: "https://in.linkedin.com/in/pawan-aichra",
  },
  {
    name: "Priyanshu Panwar",
    position: "Web Development Project Manager",
    photo: "/Assets/AboutUs/Team/Priyanshu.jpg",
    linkedInUrl: "https://in.linkedin.com/in/priyanshu-panwar",
  },
  {
    name: "Shreshth Srivastav",
    position: "Backend Development Intern",
    photo: "/Assets/AboutUs/Team/Shreshth.jpeg",
    linkedInUrl: "https://in.linkedin.com/in/shreshth-srivastav-35b263149",
  },
  {
    name: "Bhavya Patel",
    position: "Sales and Marketing Intern",
    photo: "/Assets/AboutUs/Team/Bhavya.jpeg",
    linkedInUrl: "https://in.linkedin.com/in/bhavya-patel-743200127",
  },
  {
    name: "Shalini Rajarajan",
    position: "Content Writer",
    photo: "/Assets/AboutUs/Team/shalini.jfif",
    linkedInUrl: "https://www.linkedin.com/in/shalini-rajarajan-702b27219/",
  },
  {
    name: "Pallavi Kiragi",
    position: "Graphic Intern",
    photo: "/Assets/AboutUs/Team/Pallavi.jpg",
    linkedInUrl: "https://www.linkedin.com/in/pallavi-kiragi-310a63176/",
  },
  {
    name: "Gaurav Solanki",
    position: "Frontend Development Intern",
    photo: "/Assets/AboutUs/Team/gaurav.jpg",
    linkedInUrl: "https://www.linkedin.com/in/gaurav-solanki-268a0119a/",
  },
  {
    name: "Prathap",
    position: "Frontend Development Intern",
    photo: "/Assets/AboutUs/Team/prathap.jpg",
    linkedInUrl: "https://www.linkedin.com/m/in/prathap02",
  },
];

const TeamCard = ({ name, position, photo, linkedInUrl }) => {
  return (
    <div
      style={{
        margin: "0 20%",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <img
          src={photo}
          style={{
            display: "flex",
            borderRadius: "50%",
            height: "100%",
            width: "100%",
          }}
          alt="Team Member"
        />
      </div>
      <div>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <Typography variant="h5" color="secondary">
            {name}
          </Typography>
        </a>
        <Typography variant="body1">{position}</Typography>
      </div>
    </div>
  );
};

//Custom Arrows for carousel
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton style={{ padding: "0px", margin: "auto 0px" }} onClick={onClick}>
      <ArrowForwardIosIcon fontSize="large" />
    </IconButton>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton style={{ padding: "0px", margin: "auto 0px" }} onClick={onClick}>
      <ArrowBackIosIcon fontSize="large" />
    </IconButton>
  );
};

// Breakpoints to display number of slides according to width of screen in Carousel
const responsive = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  },
];

const AboutUs = () => {
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:600px)");

  // for Toggling Solar Products Section
  const [viewSolar, setViewSolar] = useState(false);

  //For Toggling Shops Section
  const [viewShop, setViewShop] = useState(false);

  return (
    <div style={{ margin: "0px", padding: "0px"}}>
      <div className={clsx(classes.root, classes.title)}>
        <Typography
          variant={matches ? "h3" : "h4"}
          gutterBottom         
          style={{
            fontSize: matches ? "45px" : "25px",
            paddingLeft: matches ? "15px" : "0px",
            marginTop:  matches ? "-22px" : "-20px",
          }}
        >
          <strong>Our Mission</strong>
        </Typography>
        <Typography
          variant="h3"
          align="justify"
          style={{
            fontSize: matches ? "34px" : "17px",
            paddingLeft: matches ? "15px" : "0px",
            paddingRight: matches ? "15px" : "0px",
            marginBottom: matches ? "-10px" : "-3px",
            lineHeight: matches ? "45px" : "22px",
          }}
        >
          TO PROVIDE UNINTERRUPTED ACCESS TO CLEAN ELECTRICITY AT THE LOWEST POSSIBLE PRICES AND UTMOST CONVENIENCE.
        </Typography>
      </div>
      <div className={classes.solarImg}>
        <img
          src="/Assets/AboutUs/solarPanelNew.jpg"
          style={{ display: "flex", height: matches ? "450px" : "300px", width: "100%", objectFit: "cover" }}
          alt="Solar Panel"
        />
      </div>
      <div className={clsx(classes.root, classes.titleVision)}>
        <Typography
          variant={matches ? "h3" : "h4"}
          
          style={{
            fontSize: matches ? "42px" : "22px",
            marginBottom: "1rem",
            paddingLeft: matches ? "15px" : "0px",
          }}
        >
          <strong>Our Vision</strong>
        </Typography>
        <Typography variant="h4" align="justify" style={{ fontSize: matches ? "22px" : "12px", textTransform: "uppercase", paddingLeft: matches ? "15px" : "0px", paddingRight: matches ? "15px" : "0px", }}>
          &ldquo;To leverage technology and accurate solar expertise to provide our customers with the best renewable
          energy products relevant to their needs". We aim to create awareness about solar products as few people know
          the benefits of solar and that it is the only investment with zero downside or no potential loss. We are
          determined to bring access to clean energy to every part of the world and catalyze the transition towards
          renewable energy by solving all the inefficiencies in the energy sector.&rdquo;
        </Typography>
      </div>
      <Grid className={classes.navTab}>
        <Grid item xs={5}>
          <Link onClick={() => setViewSolar(false)}>
            <Typography
              style={{
                color: "black",
                opacity: !viewSolar ? "100%" : "40%",
                textDecoration: "underline",
                paddingLeft: matches ? "15px" : "0px",
              }}
              variant={matches ? "h4" : "h6"}
            >
              SOLAR PRODUCTS
            </Typography>
          </Link>
        </Grid>

        <Divider orientation="vertical" />

        <Grid item xs={5}>
          <Link onClick={() => setViewSolar(true)}>
            <Typography
              style={{
                color: "black",
                opacity: viewSolar ? "100%" : "40%",
                textDecoration: "underline",
                textAlign: "right",
                paddingRight: matches ? "15px" : "0px",
           
              }}
              variant={matches ? "h4" : "h6"}
            >
              DESIGN
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <div className={clsx(classes.root, classes.navContent)}>
        {viewSolar ? (
          <>
            <div style={{ display: "flex", alignItems: "center", marginTop: matches ? "-40px" : "-40px"}}>
              <Typography style={{ fontSize: matches ? "33px" : "23px", paddingLeft: matches ? "15px" : "0px",
            }} variant="h3">
                DESIGN&nbsp;
              </Typography>
              <img
                style={{
                  height: matches ? "80px" : "60px",
                  width: matches ? "80px" : "60px",
                }}
                src="/Assets/AboutUs/iconDesign.png"
                alt="Design Icon"
              />
            </div>
            <Typography align="justify" style={{ fontSize: matches ? "24px" : "16px", paddingLeft: matches ? "15px" : "0px",
             paddingRight: matches ? "15px" : "0px"}} variant="h4">
              The only hiccup in the solar installation is lack of accurate designs i.e the products require to tuned
              and installed according to various conditions and factors but due to various reasons many people fail to
              do so hence to tackle this problem we also provide specialized products and designs to cater a particular
              site with precision, analysis to make sure that the products work at their full efficiency and deliver the
              best results and minimize the rate of failure.
            </Typography>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center",marginTop: matches ? "-40px" : "-40px" }}>
              <Typography style={{ fontSize: matches ? "33px" : "23px",paddingLeft: matches ? "15px" : "0px"}} variant="h3">
                SOLAR PRODUCTS&nbsp;
              </Typography>
              <img
                style={{
                  height: matches ? "80px" : "60px",
                  width: matches ? "80px" : "60px",
                }}
                src="/Assets/AboutUs/iconSolar.png"
                alt="Solar Icon"
              />
            </div>
            <Typography align="justify" style={{ fontSize: matches ? "24px" : "16px", paddingLeft: matches ? "15px" : "0px", paddingRight: matches ? "15px" : "0px", }} variant="h4">
              Solar products are paramount in the transition to clean energy and because of the continuous development
              in the technology and the Government&rsquo;s push towards it has made it more convenient for people to
              access it at affordable prices . Many people don&rsquo;t know that solar products create more value than
              the amount invested in setting it up. It works even where traditional grids cannot. It works even where
              traditional grid cannot reach. It can provide uninterrupted access to electricity.
            </Typography>
          </>
        )}
      </div>

      <div className={clsx(classes.root, classes.titleFeatures)}>
        <Typography
          variant={matches ? "h3" : "h4"}
          gutterBottom
          style={{
            fontSize: matches ? "42px" : "22px",
            
            paddingLeft: matches ? "15px" : "0px",
            
          }}
        >
          <strong>Features</strong>
        </Typography>
        <Typography variant="h4" align="justify" style={{ fontSize: matches ? "23px" : "15px",paddingLeft: matches ? "15px" : "0px"}}>
          We sell customer curated products and designs which are warranted on their quality. We also sell products
          which are easy to assemble and simple to use . The products we sell are extremely durable, being able to
          withstand any harsh conditions. We also provide access to the variety of categories and products to choose
          from ranging from local to global brands available for micro to mega-industrial scale. We also provide full
          assistance in choosing the products and installation.
        </Typography>
      </div>

      <Grid className={classes.navTab}>
        <Grid item xs={5}>
          <Link onClick={() => setViewShop(false)}>
            <Typography
              style={{
                color: "black",
                opacity: !viewShop ? "100%" : "40%",
                textDecoration: "underline",
                paddingLeft: matches ? "15px" : "0px",
          
              }}
              variant={matches ? "h4" : "h6"}
            >
              SHOPS
            </Typography>
          </Link>
        </Grid>
        <Divider orientation="vertical" />
        <Grid item xs={5}>
          <Link onClick={() => setViewShop(true)}>
            <Typography
              style={{
                color: "black",
                opacity: viewShop ? "100%" : "40%",
                textDecoration: "underline",
                textAlign: "right",
            paddingRight: matches ? "15px" : "0px",
              }}
              variant={matches ? "h4" : "h6"}
            >
              DELIVERY
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <div className={clsx(classes.root, classes.navContent)}>
        {viewShop ? (
          <>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", marginTop: matches ? "-85px" : "-85px"}}>
              <Typography style={{ fontSize: matches ? "33px" : "23px", paddingLeft: matches ? "15px" : "0px" }} variant="h3">
                DELIVERY&nbsp;
              </Typography>
              <img
                style={{
                  height: matches ? "80px" : "60px",
                  width: matches ? "80px" : "60px",
                }}
                src="/Assets/AboutUs/iconDelivery.png"
                alt="Design Icon"
              />
            </div>
            <Typography align="justify" style={{ fontSize: matches ? "24px" : "16px",paddingLeft: matches ? "15px" : "0px",
             paddingRight: matches ? "15px" : "0px", }} variant="h4">
              This is one of the kye feature of our company we deliver goods in a timely and secure manner globally with
              scope in the countries of Nigeria, Middle-East countries, Europe and United States as fast as possible to
              provide more value for price.
            </Typography>
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", marginTop: matches ? "-40px" : "" }}>
              <Typography style={{ fontSize: matches ? "33px" : "23px" ,paddingLeft: matches ? "15px" : "0px",
           }} variant="h3">
                SHOPS&nbsp;
              </Typography>
              <img
                style={{
                  height: matches ? "80px" : "60px",
                  width: matches ? "80px" : "60px",
                  
                }}
                src="/Assets/AboutUs/iconShops.png"
                alt="Solar Icon"
              />
            </div>
            <Typography align="justify" style={{ fontSize: matches ? "24px" : "16px",paddingLeft: matches ? "15px" : "0px",
            paddingRight: matches ? "15px" : "0px", }} variant="h4">
              We source our products from all around the world to provide you with a wide range of variety. We source
              from a variety of small scale and mega-industrial scale manufacturers and bring the goods directly to you
              hence cutting the middle management and also cutting the prices to provide the best product experience. We
              provide a platform where small players can compete with the big players in the market by providing them
              visibility to global marketplace and access to clients.
            </Typography>
          </>
        )}
      </div>

      <div className={clsx(classes.team, classes.root)}>
        <Typography
          className={classes.notSelectable}
          style={{ fontSize: matches ? "45px" : "35px", marginBottom: "1.5rem", textAlign: "center" }}
          variant="h3"
        >
          TEAM
        </Typography>
        <Slider
          style={{ display: "flex", flexDirection: "row", paddingLeft: matches ? "15px" : "0px",
          paddingRight: matches ? "15px" : "0px", }}
          prevArrow={<SamplePrevArrow />}
          nextArrow={<SampleNextArrow />}
          slidesToShow={3}
          swipeToSlide={true}
          infinite={true}
          responsive={responsive}
          autoplay={true}
          autoplaySpeed={3000}
          cssEase="linear"
        >
          {teamMembers.map((member, index) => {
            return <TeamCard key={member.name} {...member} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
