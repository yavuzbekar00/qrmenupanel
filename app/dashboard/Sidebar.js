"use client"
import { AppBar, Box, Button, Typography } from "@mui/material";
// icons
import Home from '@mui/icons-material/Home';
import Product from '@mui/icons-material/QrCode';
import QrCode from '@mui/icons-material/QrCode2';
import Account from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menuData = [
  {
    id: 1,
    title: "Ana Sayfa",
    icon: "Home",
    route:"/dashboard"
  },
  {
    id: 2,
    title: "Ürün Yönetimi",
    icon: "Product",
    route:"/product"
  },
  {
    id: 3,
    title: "QR Kodum",
    icon: "QrCode",
    route:"/qrcode"
  },
  {
    id: 4,
    title: "Hesap",
    icon: "Account",
    route:"/account"
  }
]

function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
 
  const handleClick=(data)=>{
    router.push(data.route)
  }

  return (
    <AppBar position="fixed" sx={{
      backgroundColor: "#fff",
      left: 0,
      zIndex: "-1",
      width: "280px",
      height: "100vh",
    }}>
      {/* yukarısı */}
      <Box sx={{
        mt: "60px",
        p: "20px"
      }}>
        {
          menuData.map((data) => {
            let Icon
            if(data.icon==="Home"){
              Icon=Home
            }else if(data.icon==="Product"){
              Icon=Product
            }else if(data.icon==="QrCode"){
              Icon=QrCode
            }else if(data.icon==="Account"){
              Icon=Account
            }
            return (
              <Box key={data.id}  
              onClick={()=>handleClick(data)}
              sx={{
                padding: "20px",
                display:"flex",
                backgroundColor: pathname === data.route ? "#d32f2f" : "transparent",
                borderRadius:3, 
                cursor:"pointer"
              }}>
                <Icon sx={{
                  color: pathname === data.route ? "#fff" :  "#637381",
                  mr:"15px"
                }}/>
                <Typography sx={{
                  color: pathname === data.route ? "#fff" :  "#637381",
                  fontWeight: "600"
                }}>
                  {data.title}
                </Typography>
              </Box>
            );
          })
        }
      </Box>
      {/* aşağısı */}
      <Box>
      </Box>
    </AppBar>
  );
}

export default Sidebar;
