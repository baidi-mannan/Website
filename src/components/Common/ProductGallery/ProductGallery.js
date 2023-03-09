import React, {useEffect, useRef} from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../../ProductType";
import ProductCards from './ProductCards';
import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "30px 0px",
    },
  }));
  
const ProductGallery = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    let typeProductStateSolarPanel = productData["SOLARPANEL"].state;
    let typeProductActionSolarPanel = productData["SOLARPANEL"].action;
    let typeProductLoadingSolarPanel = productData["SOLARPANEL"].loading;
    let typeProductErrorSolarPanel = productData["SOLARPANEL"].error;
    
    const currentProductsSolarPanel = useSelector(state => state.Product[typeProductStateSolarPanel]);
    const currentProductsSolarPanelLoading = useSelector(state => state.Product[typeProductLoadingSolarPanel]);
    const currentProductsSolarPanelError = useSelector(state => state.Product[typeProductErrorSolarPanel]);

    let typeProductStateSolarInverter = productData["SOLARINVERTER"].state;
    let typeProductActionSolarInverter = productData["SOLARINVERTER"].action;
    let typeProductLoadingSolarInverter = productData["SOLARINVERTER"].loading;
    let typeProductErrorSolarInverter = productData["SOLARINVERTER"].error;

    const currentProductsSolarInverter = useSelector(state => state.Product[typeProductStateSolarInverter]);
    const currentProductsSolarInverterLoading = useSelector(state => state.Product[typeProductLoadingSolarInverter]);
    const currentProductsSolarInverterError = useSelector(state => state.Product[typeProductErrorSolarInverter]);
    
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);
    let resetTimeout;

    useEffect(() => {
      if(!currentProductsSolarPanel.length){
        dispatch(typeProductActionSolarPanel())
      }
    }, [dispatch, typeProductActionSolarPanel, currentProductsSolarPanel])
  
    useEffect(() => {
      if(!currentProductsSolarInverter.length){
        dispatch(typeProductActionSolarInverter())
      }
    }, [dispatch, typeProductActionSolarInverter, currentProductsSolarInverter])
    
    const breakPoints = [
            {width: 1, itemsToShow: 1},    
            {width: 600, itemsToShow: 2}, 
            {width: 800, itemsToShow: 3},    
            {width: 1000, itemsToShow: 4},    
            {width: 1500, itemsToShow: 4}     
        ]

    return (
        <div className={classes.root}>
            {/* <Container> */}
                <Typography
                    variant="h6"
                    color="primary"
                    style={{ marginTop: 40, textAlign: "center"}}
                    >
                    <strong>
                        SOLRUF
                    </strong>
                </Typography>
                <Typography
                    variant="h4"
                    color="secondary"
                    style={{ marginBottom: 40, textAlign: "center"}}
                    >
                    <strong>
                        PRODUCT GALLERY
                    </strong>
                </Typography>
                <div style={{ marginBottom: 40}}>
                    <Typography
                        variant="h5"
                        color="secondary"
                        style={{ marginLeft:20, marginBottom: 40}}
                        >
                        <strong>
                            Solar Panel
                            <hr style={{width: "8%",  marginLeft: 0, color: '#FFD05B', height: '3px',backgroundColor: '#FFD05B', border: 'none', marginTop: 0,}}></hr>
                        </strong>
                    </Typography>
                
                    <Carousel 
                        breakPoints={breakPoints}
                        ref={carouselRef1}
                        onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout)
                            if (index+1 === currentProductsSolarPanel.length) {
                                resetTimeout = setTimeout(() => {
                                    carouselRef1.current.goTo(0)
                                },100) // same time
                            }
                        }}
                    >
                        {currentProductsSolarPanelLoading ? "Loading..." : currentProductsSolarPanelError ? 
                        <h4 style={{color:'white'}}><i>No products available currently</i></h4>
                        : 
                        currentProductsSolarPanel.length ? 
                        currentProductsSolarPanel.map((product) => 
                        { if(product.images == null){
                            return <ProductCards product={product} key={product.id} imgThere="no"/>
                        }else{
                            return <ProductCards product={product} key={product.id} imgThere="yes" imgs={product.images}/>
                        } 
                        })
                        :
                        <h4 style={{color:'white'}}><i>No products available currently</i></h4>
                        }
                    </Carousel>
                </div>
            
                <div>
                    <Typography
                        variant="h5"
                        color="secondary"
                        style={{ marginLeft:20, marginBottom: 40}}
                        >
                        <strong>
                            INVERTER
                            <hr style={{width: "8%",  marginLeft: 0, color: '#FFD05B', height: '3px',backgroundColor: '#FFD05B', border: 'none', marginTop: 0,}}></hr>
                        </strong>
                    </Typography>
                
                    <Carousel 
                        breakPoints={breakPoints}
                        ref={carouselRef2}
                        onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout)
                            if (index + 1 === currentProductsSolarInverter.length) {
                                resetTimeout = setTimeout(() => {
                                    carouselRef2.current.goTo(0)
                                },100) // same time
                            }
                        }}
                    >
                        {currentProductsSolarInverterLoading ? "Loading..." : currentProductsSolarInverterError ? 
                        <h4 style={{color:'white'}}><i>No products available currently</i></h4>
                        : 
                        currentProductsSolarInverter.length ? 
                        currentProductsSolarInverter.map((product) => 
                        { if(product.images == null){
                            return <ProductCards product={product} key={product.id} imgThere="no"/>
                        }else{
                            return <ProductCards product={product} key={product.id} imgThere="yes" imgs={product.images}/>
                        } 
                        })
                        :
                        <h4 style={{color:'white'}}><i>No products available currently</i></h4>
                    }
                    </Carousel>
                </div>   
            {/* </Container> */}
        </div>
    )
}

export default ProductGallery;
