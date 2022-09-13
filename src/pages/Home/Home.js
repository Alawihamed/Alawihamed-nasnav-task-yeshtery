import React, { Component } from 'react';
import Products from '../../components/Products/Products';
import ProductsData from '../../services/products';
import '../../Styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Products products={ProductsData}/>
      </div>
    );
  }
}
