import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Css/Home.css"
import Im from "../images/homeShoe.1427e572.png"
const Home = () => {
    return (
        <div className="home">
            <div className="sec2">
                <div className="motitext">
                    One Shoe
                   
                </div>
                <div className="motitext">
                  Can Change
                    
                </div>
                <div className="motitext">
                    <span className="pink" > Your Life</span> 
                </div>

            <div className="motitext">
                <Button style={{background:"red", color:"white"}} ><NavLink style={{textDecoration:"none",color:"white"}} to="/store">Start Shopping </NavLink></Button>
            </div>
            </div>
        <div className="sec3">
        <img className="im" src={Im} alt="" />
        </div>
            <div className="sec1">
            <div className="secbg">
               
            </div>
            </div>
            
        </div>
    )
}

export default Home
