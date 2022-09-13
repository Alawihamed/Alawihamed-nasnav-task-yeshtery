import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import ProductDetails from '../ProductDetails/ProductDetails';
import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path="/nasnav-task-yeshtery" component={Home} />
        <Route exact path="/nasnav-task-yeshtery/product-details/:id" component={ProductDetails} />
      </Switch>
      <Footer />
      </>
    );
  }
}
