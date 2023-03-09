import * as actionCreator from "../actions/Types";

// import cartData from "../components/Cart/cart.json"; // dummy data

/*
    PROTOTYPE
    products : [{id, name, description, visibleFields, price, type, materialType, size}]
    cart : [{id, name, description, visibleFields, price, type, materialType, size, quantity}]
*/

const INITIAL_STATE = {
  // cart: cartData.products,
  cart: [],
  acdb: [],
  dcdb: [],
  solarPanel: [],
  solarInverter: [],
  loadingAcdb : false,
  loadingDcdb : false,
  loadingSolarInverter : false,
  loadingSolarPanel : false,
  errorAcdb: ' ',
  errorDcdb: ' ',
  errorSolarInverter: ' ',
  errorSolarPanel: ' ',
  //allProducts
  allProducts: [],
  loadingAllProducts: false,
  errorAllProducts: '',
};

export default function Products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionCreator.ADD_TO_CART:   

      const inCart = state.cart.find((item) =>
        item.id === action.payload.item.id ? true : false
      );
      return {
        ...state,
        cart: inCart 
          ? state.cart.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload.item, quantity: 1 }],
      };

    case actionCreator.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.itemID),
      };
    case actionCreator.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemID
            ? { ...item, quantity: action.payload.qty }
            : item
        ),
      };
    case actionCreator.ORDER_PLACED_CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
    //acdb
    case actionCreator.FETCH_AcdbProducts_REQUEST:
      return {
        ...state,
        loadingAcdb: true,
      }  
    case actionCreator.FETCH_AcdbProducts_SUCCESS:
      return {
        ...state,
        loadingAcdb: false,
        acdb: action.payload,
        errorAcdb: '',
      }
    case actionCreator.FETCH_AcdbProducts_FAILURE:
      return {
        ...state,
        loadingAcdb: false,
        acdb: [],
        errorAcdb: action.payload,
      }
    //dcdb
    case actionCreator.FETCH_DcdbProducts_REQUEST:
      return {
        ...state,
        loadingDcdb: true,
      }    
    case actionCreator.FETCH_DcdbProducts_SUCCESS:
      return {
        ...state,
        loadingDcdb: false,
        dcdb: action.payload,
        errorDcdb: '',
      } 
    case actionCreator.FETCH_DcdbProducts_FAILURE:
      return {
        ...state,
        loadingDcdb: false,
        dcdb: [],
        errorDcdb: action.payload,
      }
    //solarEnv
    case actionCreator.FETCH_SolarInverterProducts_REQUEST:
      return {
        ...state,
        loadingSolarInverter: true,
      }    
    case actionCreator.FETCH_SolarInverterProducts_SUCCESS:
      return {
        ...state,
        loadingSolarInverter: false, 
        solarInverter: action.payload,
        errorSolarInverter: '',
      } 
    case actionCreator.FETCH_SolarInverterProducts_FAILURE:
      return {
        ...state,
        loadingSolarInverter: false,
        solarInverter: [],
        errorSolarInverter: action.payload,
        }
    //solarPan
    case actionCreator.FETCH_SolarPanelProducts_REQUEST:
      return {
        ...state,
        loadingSolarPanel: true,
      }    
    case actionCreator.FETCH_SolarPanelProducts_SUCCESS:
      return {
        ...state,
        loadingSolarPanel: false,
        solarPanel: action.payload,
        errorSolarPanel: '',
      } 
    case actionCreator.FETCH_SolarPanelProducts_FAILURE:
      return {
        ...state,
        loadingSolarPanel: false,
        solarPanel: [],
        errorSolarPanel: action.payload,
      }
    //allProducts
    case actionCreator.FETCH_AllProducts_REQUEST:
      return {
        ...state,
        loadingAllProducts: true,
      }    
    case actionCreator.FETCH_AllProducts_SUCCESS:
      return {
        ...state,
        loadingAllProducts: false,
        allProducts: action.payload,
        errorAllProducts: '',
      } 
    case actionCreator.FETCH_AllProducts_FAILURE:
      return {
        ...state,
        loadingAllProducts: false,
        allProducts: [],
        errorAllProducts: action.payload,
      }
    default:
      return state;
  }
}
