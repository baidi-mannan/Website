import { Button, Card, Grid, TextField, Typography, makeStyles, Container, Hidden,Badge,IconButton  } from "@material-ui/core";
import React, { useState } from "react";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HomeIcon from '@material-ui/icons/Home';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import axios from "axios";
import { useSnackbar } from "notistack";
import { BASE_URL } from "../../config";
import formValidation from "../Cart/Helper/formValidation";
import { Helmet } from "react-helmet";


const fieldsValidation = {
  email: {
    error: "",
    validate: "email",
  },
  name: {
    error: "",
    minLength: 5,
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15,
  },
  query: {
    error: "",
    minLength: 5,
  },
}

const useStyles = makeStyles ({
  outer:{
    backgroundColor: 'white',
    backgroundSize: '100% 100%',
    "& .MuiIconButton-root": {
      padding: '2px',
  } 
  },
  input: {
    display: 'none',
  },
  text: {
    textDecoration: "none",
    '&:hover': {
      color: "white",
    },
    "& text:visited": {
      textDecoration: "none",
    },
    // style={{color: '#bebebe'}}
    color: "#bebebe",
  },
  icon:{
    '&:hover': {
      color: "white",
    },
  },
  btnRoot:{
    backgroundColor: '#bebebe',
    fontSize: "small",   
    margin: 3,
  },
  btnLabel:{
    color: 'black',
  },
})


const Contact = () => {

  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const [formErrors, setFormErrors] = useState({});
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [fileName, setFileName] = useState(""); 

  const url = `${BASE_URL}mail`
  const [data,setData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  })

  const handle = (e) =>{
    const newdata ={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)

    const { name, value } = e.target;
    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";
    setFormErrors({
      [name]: error,
    });
  }

  const onFileChange = event => {
    setSelectedFiles(event.target.files[0]);  
    setFileName(event.target.files[0].name)
  };

  const submit = (e) => {
    e.preventDefault();
  
    var bodyFormData = new FormData();
    bodyFormData.append('to', 'sumo@solruf.com');
    bodyFormData.append('body', [data.name, data.email, data.phone, data.query ].join(", "))
    bodyFormData.append('file', selectedFiles); 
    
    axios({
      method: "post",
      url: url,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        enqueueSnackbar(
          "Your query has been received. We will contact you soon.",
          { variant: "success" }
        )
        setData({
          name: "",
          email: "",
          phone: "",
          query: "",
        })
        setSelectedFiles(null)
        setFileName("")
      })
      .catch((error) => {
        enqueueSnackbar("There is some error, please check your details", {
          variant: "error",
        })
      });
  }

  const isValid = 
  data.name.length >= 0 &&
  data.phone.length >= 10 &&
  !formErrors.phone &&
  data.email.length > 0 &&
  !formErrors.email &&
  data.query.length > 0;

  var isDisabled = true;;
  if(isValid){
    isDisabled = false;
  }

  return (
    <div className={classes.outer}>
      <div className={classes.root}>
        <Helmet>       
          <title>SOLRUF INDIA - Contact Us</title>
          <meta
          name="description"
          content="Contact SOLRUF INDIA.
          Solruf is a solar marketplace and installation platform. We provide a range of solar product catalogs offered by manufacturers and first hand distributors on our platform, providing better price to the solar installers and customers along with better availability for the products."
          />
        </Helmet>
        <Grid container justify="center"> 
          <Grid item xs={12} md={1} container>
              <Grid xs={12} md={7} style={{ background: 'linear-gradient(180deg, #f5cc70 10%, #fff 0%)'}}></Grid>
              <Grid xs={12} md={5}></Grid>
          </Grid>
          <Grid item xs={12} md={5}>    
            <Container>
              <Grid container  style={{margin: '40px 0px'}}>
                <Grid item xs={12} md={9}>
                  <Card elevation={0} justify="center" className={classes.card}>
                    <form onSubmit={submit}>
                      <Grid container >
                        <Grid item xs={12} sm={12}>                    
                          <Typography variant="h3" style={{ margin: "20px 0px"}}>
                            <b>Contact Us</b>
                          </Typography>
                          <Typography variant="body1" color="secondary" style={{ marginTop: "20px",color: '#bebebe'}}>
                            Please get in touch and our support team experts<br></br> will answer all your questions
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}> 
                          <TextField className={classes.textfile}
                            value={data.name}
                            onChange={(e)=>handle(e)}
                            id="name"
                            required
                            label="Name"
                            type="text"
                            name="name"
                            style={{margin: "2px 2px 20px", width: "100%"}}
                            color="secondary"
                            error={!!formErrors.name}
                            helperText={formErrors.name}
                          />
                        </Grid>
                        <Grid item xs={12} md={12}> 
                          <TextField className={classes.textfile}
                            value={data.email}
                            onChange={(e)=>handle(e)}
                            id="email"
                            required
                            label="Email"
                            type="text"
                            name="email"
                            style={{margin: "2px 2px 20px  ", width: "100%"}}
                            color="secondary"
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                          />
                        </Grid>
                        <Grid item xs={12} md={12}> 
                          <TextField className={classes.textfile} 
                            value={data.phone}
                            onChange={(e)=>handle(e)}
                            id="phone"
                            required
                            name="phone"
                            label="Contact No."
                            type="text"
                            style={{margin: "2px 2px 20px", width: "100%"}}
                            color="secondary"
                            error={!!formErrors.phone}
                            helperText={formErrors.phone}
                          />
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField className={classes.textfile}
                            value={data.query}
                            onChange={(e)=>handle(e)}
                            id="query"
                            required
                            multiline
                            rows={3}
                            label="Message"
                            type="text"
                            name="query" 
                            style={{margin: "2px 2px 20px", width: "100%"}}
                            color="secondary"
                            error={!!formErrors.query}
                            helperText={formErrors.query}
                          />
                        </Grid>
                        <>
                          <Grid item xs={12} md={6}>
                            <input
                              accept="*"
                              className={classes.input}
                              id="contained-button-file"
                              type="file"
                              onChange={onFileChange}
                            />
                            <label htmlFor="contained-button-file">
                              <Button size="medium" component="span" startIcon={<CloudUploadIcon style={{color: '#bebebe'}} />}style={{ marginTop: "20px",}} >
                                Upload File
                              </Button>
                              <p style={{color:"#4D4D4D"}}>{fileName}</p>
                            </label>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Button className={classes.sendbtn}
                              onClick={(e)=>submit(e)}
                              color="primary"
                              size="medium"
                              variant="contained"
                              id="standard-basic" 
                              disabled={isDisabled}
                              style={{ marginTop: "20px", color: 'black', backgroundColor: "#f5cc70" }}
                            >
                              Send Message
                            </Button>
                          </Grid> 
                        </>      
                      </Grid>   
                    </form>         
                  </Card>
                </Grid>
                <Grid item xs={0} md={3}></Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
            <Hidden only={['xs', 'sm']}>
            <Grid item xs={12} md={5} style={{ background: 'linear-gradient(90deg, #fff 50%, #f5cc70 50%)',}}>
              <Grid container style={{marginTop: '80px', height:"410px", backgroundColor: '#f5cc70'}}>
                <Grid container style={{marginTop: '18px', marginLeft: "15px" , backgroundColor: 'black', border: 'solid 0px black', borderWidth: '0px 0px 0px 0px',}}>
                  <Grid item xs={12} md={1}></Grid>
                  <Grid item xs={12} md={9}>                                
                    <Grid container style={{color: '#bebebe'}}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={11} style={{ marginTop: "40px", color: '#e3e1e1'}}>
                        <Typography variant="h3" > 
                          <b>Info</b>
                        </Typography>
                        <br></br>
                      </Grid>
                      <Grid item xs={1} style={{margin: 'auto'}}>
                        <Typography variant="body1"><b><span><HomeIcon/></span></b></Typography>
                        <br></br>
                      </Grid>
                      <Grid item xs={11}>
                        <Typography variant="body1"><span> <a className={classes.text} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/SOLRUF+INDIA+PRIVATE+LIMITED/@20.9254651,77.7606604,17z/data=!3m1!4b1!4m5!3m4!1s0x3bd6a5461a71e8bd:0x5875e325aa9d0b11!8m2!3d20.9254601!4d77.7628491">
                        Agarwal Bunglaw, Behind Atul Mangal<br></br> Karyalaya, Rukmini Nagar, Amravati,<br></br>  Maharashtra,India, 444606</a></span></Typography>
                        <br></br>
                      </Grid>
                      <Grid item xs={1} style={{margin: 'auto'}}>
                        <Typography variant="body1">
                          <b><span><CallIcon/></span></b>
                        </Typography>
                        <br></br>
                      </Grid>
                      <Grid item xs={11}>
                          <Typography variant="body1"><a className={classes.text} href="tel://+919932383997">Call us at +91-9932383997</a></Typography>
                          <br></br>
                      </Grid>
                      <Grid item xs={1}>
                          <Typography variant="body1"><b><span><MailOutlineIcon/></span></b></Typography>
                          <br></br>
                      </Grid>
                      <Grid item xs={11}>
                          <Typography variant="body1"><a className={classes.text} href="mailto:sumo@solruf.com">sumo@solruf.com</a></Typography>
                          <br></br>
                      </Grid>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={11}>
                        <Typography variant="h5" style={{ color: '#e3e1e1'}}>
                          <b>Follow Us</b>     
                        </Typography>            
                        <div style={{color: '#e3e1e1' ,marginBottom: "40px",}}>
                          <span>
                          <a className={classes.text} href="https://www.linkedin.com/company/solruf-india-private-limited/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                              <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                                <Badge className={classes.icon} color="secondary"><LinkedInIcon fontSize='small'/></Badge>
                              </IconButton>
                          </a>
                          <a className={classes.text} href="https://www.facebook.com/solrufco"  target="_blank"rel="noopener noreferrer">
                            <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                              <Badge className={classes.icon} color="secondary"><FacebookIcon fontSize='small'/></Badge> 
                            </IconButton>
                          </a>
                          <a className={classes.text} href="https://www.youtube.com/channel/UCwQlCuStfqD7eP_rxAsYs6w" target="_blank" rel="noopener noreferrer">
                            <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                              <Badge className={classes.icon} color="secondary"><YouTubeIcon fontSize='small'/></Badge>
                            </IconButton>
                          </a>         
                          <a className={classes.text} href="https://www.instagram.com/solrufco/" target="_blank" rel="noopener noreferrer">
                            <IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}}>
                              <Badge className={classes.icon} color="secondary"><InstagramIcon fontSize='small'/></Badge>
                            </IconButton>
                          </a>                   
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
