import { AppBar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '@/Components/Navbar'

function page() {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row"
        }}>
        <Box zIndex={2}>
          <Sidebar />
        </Box>
        <Box zIndex={1} ml={35} >
          <Box p={10} mt={6}>
            {/* content */}
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default page