import React, { Component } from 'react';
import '../../Styles/ProductCard.css';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    return (
      <div className='product-card'>
        <div className='product-image'>
          <img src={this.props.item.image} alt='product-img' />
          <span>{this.props.item.category}</span>
          <div className='has-360'>
            <img src='./images/product/360.svg' alt='360-icon' />
          </div>
        </div>
        <div className='product-info'>
          <h6>{this.props.item.name}</h6>
          <div className='price-brand'>
            <div className='price'>
              <div className='offer-price'>
                <p>{this.props.item.offer_price}</p>
                <span>LE</span>
              </div>
              {this.props.item.has_discount && (
                <div className='has-discount'>
                  <div className='regular-price'>
                    <p>{this.props.item.regular_price}</p>
                    <p>LE</p>
                  </div>
                  <div className='discount'>
                    <p>{this.props.item.discount}</p>
                  </div>
                </div>
              )}
            </div>
            <div className='brand'>
              <img src='./images/product/brand-logo.svg' alt='brand-logo' />
            </div>
          </div>
          <Link to={`./product-details/${this.props.item.id}`} className='more-details'>
            More Details
          </Link>
        </div>
      </div>
    )
  }
}
