import React, { Component } from 'react';
import '../../Styles/MidHeader.css';
import CartContext from '../../context/CartContext';
import CartDrawer from '../CartDrawer/CartDrawer';

export default class MidHeader extends Component {
    state ={
        show:false
    }
    onShowCart = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    onHideCart = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    render() {
        return (
            <div className='mid-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='search-box'>
                            <img src='./images/MidHeader/search.svg' alt='search-icon' />
                            <input type='text' placeholder='search' />
                        </div>
                        <div className='brand-logo'>
                            <img src='./images/MidHeader/adidas.svg' alt='brand-logo' />
                        </div>
                        <div className='right-side'>
                            <div className='box' onClick={this.onShowCart}>
                            <CartContext.Consumer>
                            {value => {
                                const {cartList} = value
                                const cartItemsCount = cartList.length

                                return (
                                <>
                                    <div className='cart'>
                                        <img src='./images/MidHeader/cart.svg' alt='cart-icon' />
                                        <p>{cartItemsCount}</p>
                                     </div>
                                    <span>Cart</span>
                                </>
                                )
                            }}
                            </CartContext.Consumer>
                            </div>
                            <div className='box'>
                                <img src='./images/MidHeader/wishlist.svg' alt='wishlist-icon' />
                                <span>Wishlist</span>
                            </div>
                            <div className='box'>
                                <img src='./images/MidHeader/login.svg' alt='login-icon' />
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
                <CartDrawer show={this.state.show} onHideCart={this.onHideCart}/>
            </div>
        );
    }
}
