import React, { Component , Suspense } from 'react';
import { withRouter } from "react-router";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductsData from '../../services/products';
import '../../Styles/ProductDetails.css';
import CartContext from '../../context/CartContext';
const LazyComponent= React.lazy(() => import('../../components/SimilarProducts/SimilarProducts'));

class ProductDetails extends Component {
    state = {
        productData: {},
        quantity: 1,
      }
      onDecrementQuantity = () => {
        const {quantity} = this.state
        if (quantity > 1) {
          this.setState(prevState => ({quantity: prevState.quantity - 1}))
        }
      }
    
      onIncrementQuantity = () => {
        this.setState(prevState => ({quantity: prevState.quantity + 1}))
      }

      componentDidMount() {
        this.getProductData()
      }

      getProductData = async () => {
        this.setState(() => ({productData: ProductsData.find((eachItem) => eachItem.id === Number(this.props.match.params.id))}));
      }

    render() {
        return (
            <div>
                <Breadcrumb />
                <div className='product-details'>
                    <div className='container'>
                        <div className='row'>
                            <div className='images'>
                                <div className='main-image'>
                                    <img src={`/${this.state.productData.image}`} alt='product-img' />
                                    <div className='has-360'>
                                        <img src='/images/product/360.svg' alt='360-icon' />
                                    </div>
                                </div>
                                <div className='slider-images'>
                                    <img src='./images/product/left-icon.png' alt='left-icon'/>
                                    {['slider-1','slider-2','slider-3','slider-4'].map((item,index)=>(
                                    <div key={index} className="image">
                                        <img src={`./images/product/${item}.png`} alt={item}/>
                                    </div>
                                    ))}
                                    <img src='./images/product/right-icon.png' alt='right-icon'/>
                                </div>
                            </div>
                            <div className='product-info'>
                                <div className='brand-logo'>
                                    <img src='./images/product/brand-logo.svg' alt='brand-logo'/>
                                </div>
                                <div className='product-name'>
                                    <h6>{this.state.productData.name}</h6>
                                </div>
                                <div className='product-category'>
                                    <h6>{this.state.productData.category}</h6>
                                </div>
                                <div className='product-review'>
                                    <div className='stars'>
                                        {[1,2,3,4].map((__item,index)=>(
                                            <img key={index} src='./images/product/fill-star.svg' alt='star'/>
                                        ))}
                                        <img src='./images/product/empty-star.svg' alt='star'/>
                                    </div>
                                    <h6>4.9 of 5</h6>
                                    <span>22 Rates</span>
                                </div>
                                <div className='product-price'>
                                    <div className='offer-price'>
                                        <p>{this.state.productData.offer_price}</p>
                                        <span>LE</span>
                                    </div>
                                    <div className='regular-price'>
                                        <p>{this.state.productData.regular_price}</p>
                                        <span>LE</span>
                                    </div>
                                    <div className='discount'>
                                        <p>{this.state.productData.discount} Off</p>
                                    </div>
                                </div>
                                <div className='divided'></div>
                                <div className='product-size'>
                                    <h3>Size</h3>
                                    <div className='sizes'>
                                         {['Small','Medium','Large','X Large','XX Large'].map((item,index)=>(
                                            <div key={index} className={`size-box ${index===2 ? 'active' : '' }`}>
                                                <p>{item}</p>
                                            </div>
                                         ))}
                                        
                                    </div>
                                </div>
                                <div className='divided'></div>
                                <div className='product-color'>
                                    <h3>Color</h3>
                                    <div className='colors'>
                                         {['color-1','color-2'].map((item,index)=>(
                                            <div key={index} className={`color-box ${index===0 ? 'active' : '' }`}>
                                                <img src={`./images/product/${item}.png`} alt={item}/>
                                            </div>
                                         ))}
                                    </div>
                                </div>
                                <div className='divided'></div>
                                <div className='product-quantity'>
                                    <h3>Quantity</h3>
                                    <div className='quantity-box'>
                                         <button onClick={this.onDecrementQuantity}><img alt='decrement' src='./images/product/decrement.png' /></button>
                                         <p>{this.state.quantity}</p>
                                         <button onClick={this.onIncrementQuantity}><img alt='increment' src='./images/product/increment.png' /></button>
                                    </div>
                                </div>
                                <div className='product-action'>
                                    <CartContext.Consumer>
                                        {value=>{
                                            const {productData, quantity} = this.state
                                            const {addCartItem} = value
                                            const onClickAddToCart = () => {
                                                addCartItem({...productData, quantity})
                                            }
                                            return (
                                                <button onClick={onClickAddToCart} className='add-to-cart'>Add To Cart</button>
                                        )}}
                                    </CartContext.Consumer>
                                    <button className='pickup'>Pickup From Store</button>
                                </div>
                            </div>
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <LazyComponent products={ProductsData}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(ProductDetails);