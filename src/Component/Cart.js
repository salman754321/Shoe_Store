import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "../Css/Cart.css"
import { ShoeContext } from '../Context/ShoeContext';
import { Button, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '80ch',
    backgroundColor: theme.palette.background.paper,
    fontSize:'20px'
  },
  fs:{
    fontSize:"20px",
  },
  inline: {
    display: 'inline',
  },
  h:{
    backgroundColor:"#a29d9d",
    height:"10vh",
  },
  hh:{
    maxHeight:"100px"
  }
}));

export default function Cart() {
  const classes = useStyles();

  const {Cart,RemoveToCart,calculateAmmount,CountItems} = useContext(ShoeContext);
  const deleteFromCart=(id)=>{
    RemoveToCart(id);
  }

  return (

      <>
      <div className="head">
       </div>
        {CountItems() > 0 ? 
        <>
       
       <div className="body">
       <List className={classes.root}>
       {Cart.map((ch)=>
       
       <>
            <ListItem key={ch.id} button className={classes.h}>
               <ListItemAvatar className={classes.hh}>
                 <Avatar
                   alt={ch.title}
                   src={ch.image}
                 />
               </ListItemAvatar>
               <ListItemText className={classes.fs} id={ch.id} primary={ch.title} />
               <ListItemSecondaryAction>
                 <IconButton color="primary"
                   edge="end"
                   onClick={()=>deleteFromCart(ch.id)}
                  >
                  <Close />
                  </IconButton>
               </ListItemSecondaryAction>
             </ListItem>
   </>
       )}
       </List>

        <div className="tAmount">
        Amount : {calculateAmmount()}
        <Divider />
        Sale Tax 16% : {(calculateAmmount()/100)*16}
        <Divider />
        Total Amount : {calculateAmmount() + (calculateAmmount()/100)*16}
        <Divider />
        <Button style={{"backgroundColor":"tan","marginTop":"10px"}}>Checkout</Button>
        </div>
       
   
       </div>
        </>
       :
       <div className="asd">
         <p style={{"padding": "70px 0"}}>Please Add Item to Cart</p>
       </div>

      
      
      
      
      }
   
    </>
  );
}
