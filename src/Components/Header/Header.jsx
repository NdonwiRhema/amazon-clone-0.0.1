// import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './Header.css'
import {FaLocationDot } from 'react-icons/fa6'
import { IoMdArrowDropdown,IoMdMenu } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='header-content1'>
            <div className='content-logo'>
                <div className='logo-div'>
                    <img
                        width={100} height={'auto'}
                         src='https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png' alt='logo'/>
                </div>
                <div className='location-div'>
                    <div>Delivering to Waknaghat</div>
                    <div>
                        <FaLocationDot/> Update Location
                    </div>
                </div>
            </div>
            <div className='content-search'>
                <div>
                    <div className='select-search'>
                        <select>
                            <option>All</option>
                            <option>Alexa</option>
                            <option>Alexa</option>
                            <option>Alexa</option>
                            <option>Alexa</option>
                        </select>
                    </div>
                    <div className='input-search'>
                        <input placeholder='Search Amazon.in'/>
                    </div>
                    <div className='btn-search'>
                        <button>
                            <FaSearch size={23}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='content-cart'>
                <div className='language-content'>
                    <span>EN <IoMdArrowDropdown/></span>
                </div>
                <div className='greeting-content'>
                    <p>Hello,SignIn
                    <br/>Account & Lists <span><IoMdArrowDropdown/></span></p>
                </div>
                <div className='orders-content'>
                    <p>Returns <br/><span> & Orders</span></p>
                </div>
                <div className='cart-content'>
                    <div>
                        <PiShoppingCartSimpleLight/>
                        Cart
                    </div>
                </div>
            </div>
        </div>
        <div className='header-content2'>
            <div className='category-all'>
               <div><IoMdMenu size={32}/></div>
               <div>All</div>
            </div>
            <div className='categories-content2'>
                <div>Fresh</div>
                <div>Amazon mini Tv</div>
                <div>Sell</div>
                <div>Best Sellers</div>
                <div>Today Deals</div>
                <div>Mobiles</div>
                <div>Mobiles</div>
                <div>Mobiles</div>
            </div>
        </div>
    </div>
  )
}

export default Header