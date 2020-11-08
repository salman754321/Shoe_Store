import React , {createContext,useReducer} from "react"
import {SHOES} from "../Shoes"
import AppReducer from "./AppReducer";


const initialState={
    Shoes:SHOES,
    Cart:[
        
    ],
}

export const ShoeContext=createContext(initialState);

export const ShoeProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function getDetails(id){
      console.log(id)
      let as=state.Shoes.filter((a)=>a.id===id);
      console.log(as)
      return as;
    }

    function CountItems() {
        return state.Cart.length;
    }
   
    function addToCart(shoe) {
        dispatch({
          type: 'ADD_TOCART',
          payload: shoe
        });
      }

      function RemoveToCart(id) {
        dispatch({
          type: 'REMOVE_TOCART',
          payload: id
        });
      }

      function exist(id){
          const as=state.Cart.filter((a)=>a.id===id);
          if(as.length===1){
              return true;
          }else{
              return false;
          }
      }

      function calculateAmmount(){
      let as= state.Cart.reduce((am,sp)=>am+sp.price,0)
        return as;
      }
   return(
       
    <ShoeContext.Provider value={
        { 
           Shoes:state.Shoes,
           Cart:state.Cart,
           CountItems,
           addToCart,
           RemoveToCart,
           calculateAmmount,
           exist,
           getDetails,
        }
    }>
        {children}
    </ShoeContext.Provider>
   )
}