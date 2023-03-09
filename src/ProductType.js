import {fetchAcdb, fetchDcdb, fetchSolarPanel, fetchSolarInverter, fetchAllProducts} from './actions/Products';

const PRODUCT_TYPE  = {
    ACDB :
        {
        action: fetchAcdb, 
        state: "acdb",
        loading: "loadingAcdb",
        error: "errorAcdb",
        },
    DCDB :
        {
        action: fetchDcdb, 
        state: "dcdb",
        loading: "loadingDcdb",
        error: "errorDcdb",
        },
    SOLARINVERTER :
        {
        action: fetchSolarInverter, 
        state: "solarInverter",
        loading: "loadingSolarInverter",
        error: "errorSolarInverter",
        },
    SOLARPANEL :
        {
        action: fetchSolarPanel, 
        state: "solarPanel",
        loading: "loadingSolarPanel",
        error: "errorSolarPanel",
        },
    ALLPRODUCTS :
        {
        action: fetchAllProducts,
        state: "allProducts",
        loading: "loadingAllProducts",
        error: "errorAllProducts",
        }
}

export default PRODUCT_TYPE;
