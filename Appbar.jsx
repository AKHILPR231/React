import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' style={{backgroundColor:'gray'}}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} align='left'>
              StudentApp
              </Typography>
              <Button color='inherit'><Link to={'/c'} style={{textDecoration:'none',color:'white'}}>View</Link></Button>
              <Button><Link color='inherit' to={'/cu'} style={{textDecoration:'none',color:'white'}}>AddStudent</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Appbar
