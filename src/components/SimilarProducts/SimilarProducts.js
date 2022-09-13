import React, { Component } from 'react';
import '../../Styles/SimilarProducts.css';

export default class SimilarProducts extends Component {
    render() {
        return (
            <div className='similar-products'>
                <div className='container'>
                    <h4>Similar Products</h4>
                    <p>You may like these products also</p>
                    <div className='products-row'>
                        {this.props.products.map((item, index) => (
                            <div className='similar-card' key={index}>
                                <div className='image'>
                                    <img src={`./${item?.image}`} alt="similar-img" />
                                    <div className='has-360'>
                                        <img src='./images/product/similar/360.svg' alt='360-icon' />
                                    </div>
                                </div>
                                <div className='info'>
                                    <h6 className='name'>{item?.name}</h6>
                                    <div className='price-brand'>
                                        <div className='price'>
                                            <div className='offer-price'>
                                                <p>{item?.offer_price}</p>
                                                <span>LE</span>
                                            </div>
                                            {item?.has_discount && (
                                                <div className='has-discount'>
                                                    <div className='regular-price'>
                                                        <p>{item?.regular_price}</p>
                                                        <p>LE</p>
                                                    </div>
                                                    <div className='discount'>
                                                        <p>{item?.discount}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className='brand'>
                                            <img src='./images/product/similar/brand-logo.svg' alt='brand-logo' />
                                        </div>
                                    </div>
                                    <div className='product-review'>
                                        <div className='stars'>
                                            {[1, 2, 3, 4].map((__item, index) => (
                                                <img key={index} src='/images/product/fill-star.svg' alt='star' />
                                            ))}
                                            <img src='./images/product/empty-star.svg' alt='star' />
                                        </div>
                                        <h6>4.9 of 5</h6>
                                    </div>
                                    <div className='ispickup'>
                                        {item?.is_pickup === true ?
                                            (
                                                <div className='pickup'>
                                                    <h6>Pickup From:</h6>
                                                    <p>Genena Mall</p>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className='delivery'>
                                                    <div className='text'>
                                                        <h6>From:</h6>
                                                        <p>UK</p>
                                                    </div>
                                                    <div className='text'>
                                                        <h6>To:</h6>
                                                        <p>Egypt</p>
                                                    </div>
                                                    <div className='text'>
                                                        <h6>In:</h6>
                                                        <p>2 Days</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
