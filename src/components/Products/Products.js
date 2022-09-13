import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import '../../Styles/Products.css';

export default class Products extends Component {
    render() {
        return (
            <div className='container'>
                <div className='products'>
                    {this.props.products.map((item, index) => (
                        <ProductCard item={item} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}
