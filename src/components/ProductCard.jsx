import React from 'react'
import './ProductCard.css'
import Iphone12 from '../assets/Iphone12.png'
import Star from '../assets/icons/Star.svg'

function ProuductCard() {
  return (
    <div className='Product_card'>
        <div className="product_card_container">
            <div className="product_card_image">
                <img src={Iphone12} alt="" />
            </div>
            <div className="product_card_info">
                <h3>Apple iPhone 13 (128GB) - Blue</h3>
                <div className="product_card_body">
                  <div className='product_card_rating'>
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                  </div>
                  <div className='product_card_price'>
                    <h4>$1,000</h4>
                  </div>

                </div>
                
            
            </div>   
            <div className="product_card_btns">
                <button className='product_card_btn'>Add to cart</button>
            </div>
        </div>
                
    </div>
  )
}

export default ProuductCard