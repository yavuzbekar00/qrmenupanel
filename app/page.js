"use client"
import { Box, Button, Card, Radio, TextField, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const users = [
    {
      "id": 1,
      "userName": "admin",
      "password": "admin123"
    }
  ]

  const router = useRouter()

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error , setError] = useState("")

  const handleButton= ()=>{
    if(username === users[0].userName && password === users[0].password){
      router.push("dashboard")
      setPassword("")
      setUserName("")
    }else{
      setError("Lütfen girdiğiniz bilgileri kontrol ediniz!")
      setPassword("")
      setUserName("")
      setTimeout(()=>{
        setError("")
      } , 5000)
    }
  }

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 1,
      height: "100vh",
      flex: 1,
      gap: 25
    }}>
      <Box>
        <Typography fontSize={100}>QR MENU</Typography>
      </Box>
      <Card sx={{
        width: 500,
        display: "flex",
        flexDirection: "column",
        padding: 2,
        boxShadow: "1px 1px 9px 1px rgba(0,0,0,0.75)",
        borderRadius: "5px"
      }}>
        <Typography fontSize={40} fontWeight={700} mb={3}>Giriş Yap</Typography>
        {
          error &&
          <Typography color="error" mb={2}>{error}</Typography>
        }
        <Box sx={{
          display: "flex",
          flexDirection: "column"
        }}>
          <TextField value={username} onChange={(e) => setUserName(e.target.value)}
            sx={{
              mb: 2
            }}
            id="outlined-basic"
            label="Kullanıcı Adı"
            variant="outlined"
          />
          <TextField value={password} onChange={(e) => setPassword(e.target.value)}
            id="outlined-password-input"
            label="Şifre"
            type="password"
            autoComplete="current-password"
          />
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 5
        }}>
          <Box sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Radio
              // checked={selectedValue === 'a'}
              // onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Typography>Beni Hatırla</Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              variant="body1"
              color="primary"
            >Şifremi Unuttum</Typography>
          </Box>
        </Box>
        <Button variant="contained" component="span" onClick={handleButton} >Giriş Yap</Button>
      </Card>
    </Box>
  )
}
