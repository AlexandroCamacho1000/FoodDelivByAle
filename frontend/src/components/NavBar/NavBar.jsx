import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom'

const NavBar = ({setShowLogin}) => {

const [menu, setMenu]= useState("menu")

const {getTotalCartAmount, token, setToken}=useContext(StoreContext)

const navigate=useNavigate();

const logout=()=>{
  localStorage.removeItem("token")
  setToken("")
  navigate("/")
}

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contac us")} className={menu==="contac us"?"active":""}>contac us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalCartAmount()===0?"":"dot"}>
                
            </div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className="navbar-profile">
          <img src={assets.profile_icon} alt=""/>
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')} >
                <img src={assets.bag_icon} alt="" /> 
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}> 
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
              </li>
            </ul>
        </div>}
      </div>
    </div>
  )
}

export default NavBar
