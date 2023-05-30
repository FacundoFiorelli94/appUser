import { useState } from 'react'
import { Typography } from '@material-ui/core' 
import Grid from '@mui/material/Unstable_Grid2'
import { AddUser } from './components/Users/AddUser'

export const App = () => {
  return (

    <Grid container display='grid' width='100%' spacing={4}>
      <Grid item xs={8} display='flex' justifyContent='flex-start'>
        <Typography variant="h3" component="h1" style={{ margin: '2rem' }}>
          Agree New Users
        </Typography>
      </Grid>
      
      <AddUser component="form" />

    </Grid>

  )
}

export default App
