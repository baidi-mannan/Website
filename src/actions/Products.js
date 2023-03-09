import * as actionCreator from "./Types";
import axios from 'axios';
import axiosConfig from '../axiosConfig';
import { BASE_URL } from "../config";


export const addToCart = (item) => {
    return {
        type: actionCreator.ADD_TO_CART,
        payload: {
            item,
        },
    };
};

export const adjustQuantity = (itemID, qty) => {
    return {
        type: actionCreator.ADJUST_QUANTITY,
        payload: {
            itemID,
            qty,
        },
    };
};

export const removeFromCart = (itemID) => {
    return {
        type: actionCreator.REMOVE_FROM_CART,
        payload: {
            itemID,
        },
    };
};

export const orderPlacedClearCart = () => {
    return {
        type: actionCreator.ORDER_PLACED_CLEAR_CART,
        payload: {},
    };
};

export const fetchAcdbProductsRequest = () => {
    return {
        type: actionCreator.FETCH_AcdbProducts_REQUEST
    }
}
export const fetchAcdbProductsSuccess = (acdbProducts) => {
    return {
        type: actionCreator.FETCH_AcdbProducts_SUCCESS,
        payload: acdbProducts
    }
}
export const fetchAcdbProductsFailure = (error) => {
    return {
        type: actionCreator.FETCH_AcdbProducts_FAILURE,
        payload: error
    }
}

// https://services.dev.solruf.com/products?type=ACDB
export const fetchAcdb = () =>{
    return(dispatch) => {
        dispatch(fetchAcdbProductsRequest)
        return(
            axiosConfig.get(`${BASE_URL}products?type=ACDB`)
                 .then((response) => {
                    if(response.data.length !== 0){
                     const acdbProducts = response.data
                     dispatch(fetchAcdbProductsSuccess(acdbProducts))
                    }
                 })
                 .catch(error => {
                     const errorMsg = error.message
                     dispatch(fetchAcdbProductsFailure(errorMsg))
                 })
        )
    }
}

export const fetchDcdbProductsRequest = () => {
    return {
        type: actionCreator.FETCH_DcdbProducts_REQUEST
    }
}

export const fetchDcdbProductsSuccess = (dcdbProducts) => {
    return {
        type: actionCreator.FETCH_DcdbProducts_SUCCESS,
        payload: dcdbProducts
    }
}

export const fetchDcdbProductsFailure = (error1) => {
    return {
        type: actionCreator.FETCH_DcdbProducts_FAILURE,
        payload: error1
    }
}

// https://services.dev.solruf.com/products?type=DCDB
export const fetchDcdb = () =>{
    return(dispatch) => {
        dispatch(fetchDcdbProductsRequest)
        return(
            axiosConfig.get(`${BASE_URL}products?type=DCDB`)
                 .then((response) => {
                     if(response.data.length !== 0){
                        const dcdbProducts = response.data
                        dispatch(fetchDcdbProductsSuccess(dcdbProducts))
                     }                   
                 })
                 .catch(error1 => {
                     const errorMsg = error1.message
                     dispatch(fetchDcdbProductsFailure(errorMsg))
                 })
        )
    }
}

export const fetchSolarInverterProductsRequest = () => {
    return {
        type: actionCreator.FETCH_SolarInverterProducts_REQUEST
    }
}

export const fetchSolarInverterProductsSuccess = (solarInverterProduct) => {
    return {
        type: actionCreator.FETCH_SolarInverterProducts_SUCCESS,
        payload: solarInverterProduct
    }
}

export const fetchSolarInverterProductsFailure = (error2) => {
    return {
        type: actionCreator.FETCH_SolarInverterProducts_FAILURE,
        payload: error2
    }
}

// https://services.dev.solruf.com/products?type=SOLARINVERTER
export const fetchSolarInverter = () =>{
    return(dispatch) => {
        dispatch(fetchSolarInverterProductsRequest)
        return(
            axios.get(`${BASE_URL}products?type=SOLARINVERTER`)
                 .then((response) => {
                    if(response.data.length !== 0){
                     const solarInverterProducts = response.data
                     dispatch(fetchSolarInverterProductsSuccess(solarInverterProducts))
                    }
                 })
                 .catch(error2 => {
                     const errorMsg = error2.message
                     dispatch(fetchSolarInverterProductsFailure(errorMsg))
                 })
        )
    }
}

export const fetchSolarPanelProductsRequest = () => {
    return {
        type: actionCreator.FETCH_SolarPanelProducts_REQUEST
    }
}

export const fetchSolarPanelProductsSuccess = (solarPanelProducts) => {
    return {
        type: actionCreator.FETCH_SolarPanelProducts_SUCCESS,
        payload: solarPanelProducts
    }
}

export const fetchSolarPanelProductsFailure = (error3) => {
    return {
        type: actionCreator.FETCH_SolarPanelProducts_FAILURE,
        payload: error3
    }
}

// https://services.dev.solruf.com/products?type=SOLARPANEL 
export const fetchSolarPanel = () =>{
    return(dispatch) => {
        dispatch(fetchSolarPanelProductsRequest)
        return(
            axios.get(`${BASE_URL}products?type=SOLARPANEL`)
                 .then((response) => {
                    if(response.data.length !== 0){
                     const solarPanelProducts = response.data
                     dispatch(fetchSolarPanelProductsSuccess(solarPanelProducts))
                    }
                 })
                 .catch(error3 => {
                     const errorMsg = error3.message
                     dispatch(fetchSolarPanelProductsFailure(errorMsg))
                 })
        )
    }
}

//all produxts
export const fetchAllProductsRequest = () => {
    return {
        type: actionCreator.FETCH_AllProducts_REQUEST
    }
}

export const fetchAllProductsSuccess = (allProducts) => {
    return {
        type: actionCreator.FETCH_AllProducts_SUCCESS,
        payload: allProducts
    }
}

export const fetchAllProductsFailure = (error4) => {
    return {
        type: actionCreator.FETCH_AllProducts_FAILURE,
        payload: error4
    }
}

// https://services.dev.solruf.com/allproducts
export const fetchAllProducts = () =>{
    return(dispatch) => {
        dispatch(fetchAllProductsRequest)
        return(
            axiosConfig.get(`${BASE_URL}allproducts`)
                 .then((response) => {
                    if(response.data.length !== 0){
                     const allProducts = response.data
                     dispatch(fetchAllProductsSuccess(allProducts))
                    }
                 })
                 .catch(error4 => {
                     const errorMsg = error4.message
                     dispatch(fetchAllProductsFailure(errorMsg))
                 })
        )
    }
}