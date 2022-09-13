import React, { Component } from 'react';
import '../../Styles/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='container'>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Unisex</li>
                <li>Kids</li>
                <li>Best Sellers</li>
                <li>New Arrivals</li>
                <li className='offer'>Offers</li>
            </ul>
        </div>
      </div>
    );
  }
}
