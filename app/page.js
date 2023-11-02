"use client"
import { Box, Button, Card, Radio, TextField, Typography } from "@mui/material"

export default function Home() {
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
      <Card>
        <Typography>Giriş Yap</Typography>
        <Typography component="p">
          Hesabınız yok mu?{' '}
          <Typography component="span" variant="body1" color="primary">
            Kayıt ol
          </Typography>
        </Typography>
        <Box>
          <TextField id="outlined-basic" label="Kullanıcı Adı" variant="outlined" />
          <TextField
            id="outlined-password-input"
            label="Şifre"
            type="password"
            autoComplete="current-password"
          />
        </Box>
        <Box>
          <Box>
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
            <Typography>Şifremi Unuttum</Typography>
          </Box>
        </Box>
        <Button>Giriş Yap</Button>
      </Card>
    </Box>
  )
}
