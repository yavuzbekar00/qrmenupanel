"use client"
import Box from '@mui/material/Box';
import React from 'react'
import Sidebar from '../../Components/Sidebar';
import { Breadcrumbs, Button, Card, IconButton, Link, Stack, Typography } from '@mui/material';
import Navbar from '@/Components/Navbar';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useRouter } from 'next/navigation';
import DetailIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function Dashboard() {
  const router = useRouter()

  const inputData = JSON.parse(localStorage.getItem('inputData'));

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
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                MUI
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
              <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
            <Typography fontSize={40} fontWeight={600}>Hoşgeldiniz, {inputData.firstName} {inputData.lastName}</Typography>
            <Stack flexDirection="row" alignItems="center" mt={3}>
              <QrCodeIcon sx={{
                width: "150px",
                height: "150px",
                ml: "-20px"
              }}></QrCodeIcon>
              <Stack>
                <Typography fontSize={30} fontWeight={600}>Kendi Qr Menünüzü</Typography>
                <Typography fontSize={30} fontWeight={600}>Hızlı Ve Kolay </Typography>
                <Typography fontSize={30} fontWeight={600}>Bir Şekilde Oluşturun</Typography>
              </Stack>
            </Stack>
            <Box mt={3}>
              <Button onClick={() => router.push("/product")} variant='text' sx={{ color: "black", marginLeft: "-15px" }}>
                <Typography fontSize={25} fontWeight={600}>Ürün Yönetimi</Typography>
              </Button>
              <Typography>Herhangi bir ürün bulunmamaktadır.</Typography>
            </Box>
            <Box mt={3}>
              <Button onClick={() => router.push("/qrcode")} variant='text' sx={{ color: "black", marginLeft: "-15px" }}>
                <Typography fontSize={25} fontWeight={600}>Qr Kodum</Typography>
              </Button>
              <Typography>Herhangi bir qr code bulunmamaktadır.</Typography>
            </Box>
            <Box mt={3}>
              <Button onClick={() => router.push("/account")} variant='text' sx={{ color: "black", marginLeft: "-15px" }}>
                <Typography fontSize={25} fontWeight={600}>Hesap</Typography>
              </Button>
              <Typography>Herhangi bir hesap bilgisi bulunmamaktadır.</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
