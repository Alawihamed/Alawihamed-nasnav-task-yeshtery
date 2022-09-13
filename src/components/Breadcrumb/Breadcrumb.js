import React, { Component } from 'react';
import '../../Styles/Breadcrumb.css';

export default class Breadcrumb extends Component {
  render() {
    return (
        <div className='breadcrumb'>
            <div className='container'>
                <div className='box'>
                  {["Men","Clothing","Tops","Adidas"].map((item,index)=>(
                    <p key={index}>{item} /</p>
                  ))}
                  <span> Adidas Black T-Shirt</span>
                </div>
            </div>
        </div>
    );
  }
}
