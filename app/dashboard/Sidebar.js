import { AppBar, Box, Button, Typography } from "@mui/material";

const menuData = [
  {
    id: 1,
    title: "Ana Sayfa"
  },
  {
    id: 2,
    title: "Ürün Yönetimi"
  },
  {
    id: 3,
    title: "QR Kodum"
  },
  {
    id: 4,
    title: "Hesap"
  }
]

function Sidebar() {
  return (
    <AppBar position="fixed" sx={{
      backgroundColor: "#fff",
      boxShadow: 0,
      left: 0,
      zIndex: "-1",
      width: "280px",
      height: "100vh",
    }}>
      {/* yukarısı */}
      <Box sx={{
        mt: "60px"
      }}>
        {
          menuData.map((data) => (
            <Box key={data.id}>
              <Typography color="error">{data.title}</Typography>
            </Box>
          ))
        }
      </Box>
      {/* aşağısı */}
      <Box></Box>
    </AppBar>
  );
}


export default Sidebar;