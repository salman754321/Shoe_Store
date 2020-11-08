import { Grid, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { ShoeContext } from '../Context/ShoeContext';
import "../Css/Detail.css"
function Detail({id}) {

    const {getDetails} = useContext(ShoeContext)
    

        console.log(id)
        const shoe=getDetails(parseInt(id));
        console.log(shoe[0].image)

    return (
        <>
         <div className="head">
    </div>
        <div>
            <Grid justify="center" direction="row" container>
                <Grid item xs={4}>
                <img className="im" src={shoe[0].image} alt="" />
                </Grid>
                <Grid  item xs={4}>
               <Typography align="center" variant="h3">
                   {shoe[0].title}
               </Typography>
                </Grid>
               
            </Grid>
        </div>
        </>
    )
}

export default Detail
