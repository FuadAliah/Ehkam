import { AppBar, Drawer, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const drawerWidth = 280

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  pages: {
    backgroundColor: '#f9f9f9',
    width: '100vw',
    height: '100vh'
  },
  drawer: {
    width: drawerWidth
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <AppBar></AppBar>
      <div className={classes.root}>

        <Drawer className={classes.drawer} variant='permanent' anchor='left' classes={{ paper: classes.drawer }}>
          <Typography variant='h5'>Drawer</Typography>
        </Drawer>


        <div className={classes.pages}>
          {children}
        </div>
      </div>
    </div>
  )
}
