import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../Images/logo.png'
import search from '../Images/search.png'
import bag from '../Images/bag.png'
import { useNavigate } from 'react-router-dom'


const Header = () => {
const router=useNavigate()
  return (

    <div id='Header_screen'>
      <div id='header_main'>
        <div id='header_list'>
          <div id='hlist_1'>
            <img onClick={()=>router('/')} src={logo} alt='' />
          </div>
          <div id='hlist_2' >
            <p onClick={()=>router('/store')}>Store</p>
          </div>
          <div id='hlist_3'>
            <p>Mac</p></div>
          <div id='hlist_4'>
            <p>iPad</p></div>
          <div id='hlist_5'>
            <p>iPhone</p></div>
          <div id='hlist_6'>
            <p>Watch</p></div>
          <div id='hlist_7'>
            <p>Airpods</p></div>
          <div id='hlist_8'>
            <p>Tv & Home</p></div>
          <div id='hlist_9'>
            <p>Entertainment</p></div>
          <div id='hlist_10'>
            <p>Accessories</p></div>
          <div id='hlist_11'>
            <p>Support</p></div>
          <div id='hlist_12'>
            <img src={search} alt=''/>
          </div>
          <div id='hlist_13'>
          <img onClick={()=>router('/cart')} src={bag} alt=''/>
          </div>

        </div>

      </div>


    </div>
  
  )
}

export default Header