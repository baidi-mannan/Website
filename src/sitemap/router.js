// Routes file for Sitemap
import React from 'react';
import { Route, Switch } from "react-router";

export default (
    <Switch>
        <Route path="/contact" />
        <Route path="/products" />
        <Route path="/cart" />
        <Route path="/order" />
        <Route path="/myorders" />
        <Route path="/termsandconditions" />
        <Route path="/shippingpolicy" />
        <Route path="/returnpolicy" />
        <Route path="/privacy" />
        <Route path={'/product/:id'} />
    </Switch>
)