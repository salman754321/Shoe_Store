import React, { useContext } from 'react'
import "../Css/Header.css"
import {ShoppingBasket} from "@material-ui/icons"
import Icon from "../images/icon.png"

import { NavLink } from 'react-router-dom';

import { Badge, IconButton, makeStyles } from '@material-ui/core';
import { ShoeContext } from '../Context/ShoeContext';

  
const useStyles = makeStyles((theme) => ({ 
  f:{
    flex:1
  }
}))
const Header = () => {
  const {CountItems} = useContext(ShoeContext)
  const classes=useStyles();
    return (
       <>
            <div className="header">
            <NavLink className={classes.f} to="/home"  ><img className="logo" src={Icon} alt="" /></NavLink>
              <div className="options">
                
                  <NavLink className="options__text" to="/home"  >Home</NavLink>
                  <NavLink className="options__text" to="/store" >Store</NavLink>
                  <NavLink className="options__text" to="/cart">
                    <IconButton aria-label="cart">
                          <Badge badgeContent={CountItems()} color="secondary">
                            <ShoppingBasket />
                          </Badge>
                        </IconButton> </NavLink>
                  
              </div>
             </div>
       
       </>
     )
}

export default Header