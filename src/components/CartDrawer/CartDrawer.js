import React, { Component } from 'react';
import "../../Styles/CartDrawer.css";
import CartContext from '../../context/CartContext';

export default class CartDrawer extends Component {
    render() {
        return (
            <div className={`full-screen ${this.props.show === true ? 'show' : ''}`}>
                <div className={`cart-drawer ${this.props.show === true ? 'show' : ''}`}>
                    <button className='close' onClick={this.props.onHideCart}>
                        <img src='./images/CartDrawer/close-icon.png' alt='close-icon' />
                    </button>
                    <div className='title'>
                        <p>My Cart</p>
                    </div>
                    <CartContext.Consumer>
                        {value => {
                            const { cartList } = value
                            const cartItemsCount = cartList.length

                            return (
                                <>
                                    {cartItemsCount === 0 ?
                                        (
                                            <p className='no-item'>No items added to cart</p>
                                        )
                                        :
                                        (
                                            <>
                                                <div className='sub-title'>
                                                    <p>Cart Summary</p>

                                                </div>
                                                {cartList.map((item, index) => (
                                                    <div className='cart-card' key={index}>
                                                        <div className='image'>
                                                            <img alt='product-img' src={`./${item?.image}`} />
                                                        </div>
                                                        <div className='info'>
                                                            <h6>{item?.name}</h6>
                                                            <div className='quantity'>
                                                                <p>Quantity: {item?.quantity}</p>
                                                            </div>
                                                            <div className='price-remove'>
                                                                <div className='price'>
                                                                    <p>{item?.offer_price}</p>
                                                                    <span>LE</span>
                                                                </div>
                                                                <button>Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className='total'>
                                                    <p>Total: 19,999 LE</p>
                                                </div><div className='action'>
                                                    <button className='cart'>Review Cart</button>
                                                    <button className='checkout'>Complete Checkout</button>
                                                </div>
                                            </>
                                        )}
                                </>
                            )
                        }}
                    </CartContext.Consumer>
                </div>
            </div>
        );
    }
}
