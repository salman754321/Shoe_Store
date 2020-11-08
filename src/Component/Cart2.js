import React, { useContext } from 'react'
import { ShoeContext } from '../Context/ShoeContext';
import { Avatar, Button, Divider, Grid,IconButton,List,ListItem,ListItemAvatar,ListItemSecondaryAction,ListItemText,Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../Css/Cart.css"
import { Close } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


function Cart() {
    const {Cart,RemoveToCart,calculateAmmount,CountItems} = useContext(ShoeContext);
  const deleteFromCart=(id)=>{
    RemoveToCart(id);
  }
  const classes=useStyles();
  return (
    <>
     <div className="head">
    </div>
        {CountItems()>0 ? 
        <div className="wr">
        <Grid container className={classes.root} spacing={6}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={6}>
            <Grid item xs={6}>
            <List className={classes.root}>
       {Cart.map((ch)=>
       
       <>
            <ListItem key={ch.id} button >
               <ListItemAvatar >
                 <Avatar  style={{height:"80px",width:"120px"}} variant="square"  sizes={"large"}
                   alt={ch.title}
                   src={ch.image}
                 />
               </ListItemAvatar>
               <ListItemText disableTypography className="as" id={ch.id} >
                   {ch.title}
                   </ListItemText>
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
            </Grid>

            <Grid item style={{border:"tomato solid 2px",backgroundColor:"rgb(183 159 159 / 12%)"}}>
            <p className="asd">Amount : {calculateAmmount()}</p>
        <Divider style={{backgroundColor:"tomato",height:"2px"}} />
       <p className="asd"> Sale Tax 16% : {(calculateAmmount()/100)*16}</p>
        <Divider style={{backgroundColor:"tomato",height:"2px"}} />
        <p className="asd"> Total Amount : {calculateAmmount() + (calculateAmmount()/100)*16} </p>
        <Divider style={{backgroundColor:"tomato",height:"2px"}} />
        <p className="asd">
        <Button style={{"backgroundColor":"tan"}}>Checkout</Button>
        </p>
            </Grid>
        </Grid>
      </Grid>
    
    </Grid>
        </div>
        
    :
    
    <div className="no">
    <p style={{"padding": "70px 0"}}>Please Add Item to Cart</p>
  </div>
    
    }
    </>
  );
}

export default Cart
