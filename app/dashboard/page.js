"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const router = useRouter()

  const logOut=()=>{
    router.push('/')
    
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="error">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              QR Menü Paneli
            </Typography>
            <Button onClick={logOut} color='inherit'>Çıkış Yap</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:"row"
      }}>
        {/* sidebar */}
        <Box>
          <Sidebar></Sidebar>
        </Box>
        {/* middle */}
        <Box>
          <Typography>middle</Typography>
        </Box>
      </Box>
    </Box>
  )
}
