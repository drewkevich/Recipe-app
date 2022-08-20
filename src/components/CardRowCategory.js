import React from 'react'
import { styled } from '@mui/material/styles';
import {Box,  Typography, Button, Grid} from '@mui/material'
import Paper from '@mui/material/Paper';
import AppContext from "../context"
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import Description from './Description';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '400px',
    maxHeight: '180px',
  });

const CardRowCategory = ({recipesByCategory}) => {


    // const getFullInfoAboutMeal = (id)=>{
    //   console.log(id)
    //   axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>{
    //     const data = res.data;
    //     const {meals} = data
    //     setMealInfo([...mealInfo, meals])
        
    //   })
    // }
    const {setIdMeal} = useContext(AppContext)
    let navigate = useNavigate()


    const onShowRecipe = (id)=>{
      setIdMeal(id)
      navigate(`/recipe/${id}`)
    }
    
    return (
    <Box>
      {recipesByCategory && recipesByCategory.map(element =>(
          
          <Paper  key={element.idMeal}
          
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 800,
              flexGrow: 1,
              marginBottom: '20px'
              // backgroundColor: (theme) =>
              //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
           
            
            <Grid container spacing={2}>
              <Grid item>
                  <Img alt="complex" src={element.strMealThumb} />
                
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography variant="h4">{element.strMeal}</Typography>
                  </Grid>
                  <Grid item >
                    <Description id = {element.idMeal}/>
                  </Grid>
                  <Grid item>
                    <Button onClick={()=>onShowRecipe(element.idMeal)}>Show Recipe</Button>
                  </Grid>
                 
                </Grid>
                
              </Grid>
            </Grid>
          </Paper>
      ))}
        
    </Box>
   
    
  )
}

export default CardRowCategory