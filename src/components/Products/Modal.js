import React from 'react'
import { makeStyles, useTheme  } from '@material-ui/core/styles';
//modal
import {Modal, IconButton, Grid} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
//carousel
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CancelIcon from '@material-ui/icons/Cancel';
import { IMG_BASE_URL } from '../../config';

const useStyles = makeStyles((theme) => ({
    //modal
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 1),
        outline: 'none',
        maxWidth: 600,
        maxHeight: 800,
        flexGrow: 1,
        border: 0,
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height:'100vh',
            flexShrink: 0,
        },
    },
    //carousel
    carousel: {
        maxWidth: 600,
        maxHeight: 800,
        flexGrow: 1,
        border: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 80,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 400,
        display: 'block',
        maxWidth: '100vh',
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
    },
  }));

const ModalComp = ({ open, handleClose, imgThere, imgs,product }) => {

    const classes = useStyles();
    const theme = useTheme();

    //carousel setup
    const [activeStep, setActiveStep] = React.useState(0);
    var maxSteps = 1;
    if(imgThere === "yes"){
        maxSteps = imgs.length;
    }
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    return (
        <div>
           <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <div className={classes.paper}>
                    <Fade in={open}>   
                        <div className={classes.carousel}>
                            <Paper square elevation={0}  className={classes.header}>
                                <Typography backgroundColor="#ffd05b" style={{width: '100%',}}>
                                    <Grid container>
                                        <Grid item xs={10} style={{alignSelf: 'center',}}>
                                            <div>
                                                <Typography variant="body1" color="primary">
                                                    <strong>{product.name}</strong>
                                                </Typography>
                                            </div> 
                                        </Grid>
                                        <Grid item xs={2} style={{alignSelf: 'center',textAlign:'right'}}>
                                            <Button color="secondary" onClick={handleClose} className="font-icon-wrapper">
                                            <IconButton color="secondary">
                                                <CancelIcon fontSize="large" />
                                            </IconButton>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Typography>    
                            </Paper>
                            {
                                imgThere==="no" ?
                                <div>
                                    <img className={classes.img} src='/product/default-img.jpg' alt="default-img.jpg" />
                                </div>
                                :
                                <div>
                                    <img className={classes.img} src={`${IMG_BASE_URL}${imgs[activeStep]}`} alt="product img" />
                                </div>
                            }
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                variant="dots"
                                activeStep={activeStep}
                                nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                                }
                                backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Back
                                </Button>
                                }
                            />
                        </div>
                    </Fade>
                </div>
            </Modal>
        </div>
    )
}

export default ModalComp;
