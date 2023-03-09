import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// BUYER
import Contact from "./components/Common/Contact";
import LandingPage from "./components/Common/LandingPageNew";
import Cart from "./components/Cart/Cart";
import { Order } from "./components/Payment/Order";
import MyOrders from "./components/Orders/MyOrders";
import Product from "./components/Products/productNew";
import ProductPage from "./components/Products/ProductPageNew";
import TermsAndConditions from "./components/Common/Policy/TermsAndConditions";
import ShippingPolicy from "./components/Common/Policy/ShippingPolicy";
import ReturnPolicy from "./components/Common/Policy/ReturnPolicy";
import PrivacyPolicy from "./components/Common/Policy/PrivacyPolicy";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Blog from "./components/Common/AboutUs";
// import SingleBlog from "./components/Common/Blog/SingleBlog/SingleBlog";
import Delhi from "./components/Common/Netmetering/Delhi/Delhi";
import HomePage from "./components/Common/Netmetering/HomePage/HomePage";
import SolarInstallation from "./components/Common/Solar Installation/SolarInstallation";


// SELLER
import { LandingPage as SellerLandingPage } from "./SELLER/Common/LandingPage";
import { Header as SellerHeader } from "./SELLER/Common/Header";
import { AddProduct } from "./SELLER/Products/AddProduct";
import { MyOrders as SellerOrders } from "./SELLER/Orders/MyOrders";
import Maharashtra from "./components/Common/Netmetering/Maharashtra/Maharashtra";
import Gujarat from "./components/Common/Netmetering/Gujarat/Gujarat";
import WestBengal from "./components/Common/Netmetering/West Bengal/WestBengal";
import Punjab from "./components/Common/Netmetering/Punjab/Punjab";
import Karnataka from "./components/Common/Netmetering/Karnataka/Karnataka";
import Haryana from "./components/Common/Netmetering/Haryana/Haryana";
import SolarDesign from "./components/Common/Solar Design/SolarDesign";
import SolarProducts from "./components/Common/Solar Products/SolarProducts";

const Router = () => {
  const location = useLocation(); // get the current path
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of the window
  }, [location.pathname]); // Scroll only if path changes
  

  
  return (
    <Switch>
      {/* BUYER ROUTES */}
      <Route exact path="/contact">
        <Header />
        <Contact />
        <Footer />
      </Route>
      <Route path='/product/:name'>
        <Header/>
        <Product />
        <Footer/>
      </Route>
      
      <Route path="/products">
        <Header />
        <ProductPage />
        <Footer />
      </Route>
      <Route path="/cart">
        <Header />
        <Cart />
        <Footer />
      </Route>
      <Route path="/order">
        <Header />
        <Order />
        <Footer />
      </Route>
      <Route path="/myorders">
        <Header />
        <MyOrders />
        <Footer />
      </Route>
      <Route path="/aboutus">
        <Header />
        <Blog />
        <Footer />
      </Route>
      <Route path="/termsandconditions">
        <Header />
        <TermsAndConditions />
        <Footer />
      </Route>
      <Route path="/shippingpolicy">
        <Header />
        <ShippingPolicy />
        <Footer />
      </Route>
      <Route path="/returnpolicy">
        <Header />
        <ReturnPolicy />
        <Footer />
      </Route>
      <Route path="/privacy">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </Route>

      {/* SELLER ROUTER */}
      <Route path="/seller/addproduct">
        <SellerHeader />
        <AddProduct />
        <Footer />
      </Route>
      <Route path="/seller/myorders">
        <SellerHeader />
        <SellerOrders />
        <Footer />
      </Route>
      <Route path="/seller">
        <SellerHeader />
        <SellerLandingPage />
        <Footer />
      </Route>

      {/* Blog */}
      {/* <Route path="/:id" exact component={SingleBlog}></Route> */}
      <Route path="/DL">
        <Header />
        <Delhi />
        <Footer />
      </Route>

      {/* Maharashtra */}
      <Route path="/MH">
        <Header />
        <Maharashtra />
        <Footer />
      </Route>

      {/* Gujarat */}
      <Route path="/GJ">
        <Header />
        <Gujarat />
        <Footer />
      </Route>

      {/* West Bengal */}
      <Route path="/WB">
        <Header />
        <WestBengal />
        <Footer />
      </Route>

      {/* Punjab */}
      <Route path="/PB">
        <Header />
        <Punjab />
        <Footer />
      </Route>

      {/* Karnataka */}
      <Route path="/KN">
        <Header />
        <Karnataka />
        <Footer />
      </Route>

      {/* Haryana */}
      <Route path="/HY">
        <Header />
        <Haryana />
        <Footer />
      </Route>

      <Route path="/netmetering">
        <Header />
        <HomePage />
        <Footer />
      </Route>

      <Route path="/installation">
        <Header />
        <SolarInstallation />
        <Footer />
      </Route>

      <Route path="/design">
        <Header/>
        <SolarDesign/>
        <Footer/>
      </Route>

      <Route path="/solarproducts">
        <Header/>
        <SolarProducts/>
        <Footer/>
      </Route>

      {/* DEFAULT ROUTE */}
      <Route path="*">
        <Header />
        <LandingPage />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Router;
