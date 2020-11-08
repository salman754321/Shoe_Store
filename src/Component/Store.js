import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "../Css/Store.css"
import {ShoppingCart} from "@material-ui/icons"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { ShoeContext } from '../Context/ShoeContext';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  media: {
    height: 250,
  },
  croot:{
      maxWidth:345
  }

}));


export default function Store() {

    const {Shoes,addToCart,exist} = useContext(ShoeContext)
    console.log(Shoes)
  const classes = useStyles();

  const addCart=(id)=>{
    const shoe=Shoes.filter((shoe)=>shoe.id===id)
    console.log(shoe)
    console.log(shoe[0])
    let NewShoe={
      id:shoe[0].id,
      title:shoe[0].title,
      price:shoe[0].price,
      quantity:shoe[0].quantity,
      image:shoe[0].image
    }
    addToCart(shoe[0])
  }
  


  return (
      <div className="store">
    <div className="head" style={{"align":"center"}}>
        </div>
   <div className="bo">
   <div className={classes.root}>

        <Grid container align="center" spacing={2}>
        {Shoes.map((shoe)=>
        <Grid item xs={'auto'} lg={4} sm={'auto'} >
        <Card align="start" key={shoe.id} className={classes.croot}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={shoe.image}
          title={shoe.title}
        >
            
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {shoe.title}
          </Typography>
          <Typography variant="h6" color="black" component="p">
          <strong>
           ${shoe.price}
           </strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={`/${shoe.id}`} >
        <Button style={{"backgroundColor":"tomato", "color":"white","minWidth":"123px"}} size="large" color="primary">
          Read More
        </Button>
        </NavLink >
        <Button disabled={exist(shoe.id)} style={{"margin-left":"40%"}} onClick={()=>addCart(shoe.id)} size="small" color="primary">
       { exist(shoe.id) ?   "added": <ShoppingCart /> } 
        </Button>
      </CardActions>
    </Card>
        </Grid>
       
        )}
        </Grid>
    </div>
   </div>
    </div>
  );
}
