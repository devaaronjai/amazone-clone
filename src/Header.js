import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const[ { basket,user },dispatch ] = useStateValue();
  console.log(basket);
  const handleAuthenticate = () =>{
    if(user){
     auth
         .signOut()
    }
  }
    return (
        <div className="header">
        <Link to="/">
            <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJltFpFixA1fGHg8OziTxZQrl8xAaxiENzpw&usqp=CAU"  alt="logo" />
         </Link>
         <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
         </div>    
          <div className="header__nav">
            
          <Link to ={!user && "/login"} > 
          <div onClick={handleAuthenticate} className="header__option">
            <span className="header__optionLineOne">{"sign In"? "Hello guest" : user?.email   } </span>
            <span className="header__optionLineTwo">{user ? "Sign out" : "Sign In"} </span>
          </div>
          </Link>
          
          <div className="header__option">
            <span className="header__optionLineOne">Returns </span>
            <span className="header__optionLineTwo">& order </span>
          </div>

          <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime </span>
        </div>
        <Link to="/checkout">
        <div className="header__optionBasket">
         
          <ShoppingBasketIcon />
         
          <span className="header__optionLineTwo headerBasketCount"> 
          <span> 
          {basket?.length} 
          </span>
          </span>
        </div>
        </Link>
        </div>
        </div>
    )
}

export default Header;
