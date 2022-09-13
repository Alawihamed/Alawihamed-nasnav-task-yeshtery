import React, { Component } from 'react';
import '../../Styles/TopHeader.css';
import { Link } from 'react-router-dom';

export default class TopHeader extends Component {
  render() {
    return (
      <div className='top-header'>
            <div className='container'>
                <div className='row'>
                    <div className='wrapper'>
                        <img className='bar' src='../images/TopHeader/bar.svg' alt='bar-icon'/>
                        <Link to={'/'}>
                            <img className='logo' src='../images/TopHeader/logo.svg' alt="Logo"/>
                        </Link>
                    </div>
                    <div className='wrapper shop'>
                        <img className='left' src='../images/TopHeader/left.svg' alt='left-icon'/>
                        <p>Valentine’s Day Offers! Buy Two Get One Free Shop Now</p>
                        <a href='/'>Shop now</a>
                        <img className='right' src='../images/TopHeader/right.svg' alt='right-icon'/>
                    </div>
                    <div className='wrapper'>
                        <div className='wrapper right-hand'>
                            <img src='../images/TopHeader/phone.svg' alt="phone-icon"/>
                            <span>Contact Us</span>
                        </div>
                        <div className='wrapper right-hand'>
                            <img src='../images/TopHeader/cart.svg' alt="cart-icon"/>
                            <span>Track Order</span>
                        </div>
                        <div className='wrapper right-hand'>
                            <img src='../images/TopHeader/location.svg' alt="location-icon"/>
                            <span>Track Order</span>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
