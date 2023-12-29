"use client"
import { AppBar, Box, Button, Card, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '@/Components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import AddProductModal from '@/Components/AddProductModal'
import UpdateProductModal from '@/Components/UpdateProductModal'
import DefaultImage from '@mui/icons-material/HideImage';

function Page() {
  const [isUpdated, setIsUpdated] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null); // New state
  const [selectedImage, setSelectedImage] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState(
    {
      head: "",
      content: "",
      price: ""
    }
  );

  const handleOpen = () => {
    setOpen(true)
  }

  const handleAddProduct = () => {
    const uniqueId = new Date().getTime();
    const productWithId = {
      ...newProduct,
      id: uniqueId,
      image: selectedImage,
    };
    console.log(newProduct.category)
    if (newProduct.head !== "" && newProduct.content !== "" && newProduct.price !== "" && newProduct.category !== undefined) {
      setProducts((prevProducts) => [...prevProducts, productWithId]);
      setOpen(false);
      setNewProduct({
        head: "",
        content: "",
        price: "",
      });
      setSelectedImage(null);
    } else {
      if (newProduct.head === "") alert("Lütfen Ürün Başlığını Girin!")
      else if (newProduct.content === "") alert("Lütfen Ürün İçeriğini Girin!")
      else if (newProduct.price === "") alert("Lütfen Ürün Fiyatını Girin!")
      else if (newProduct.category === undefined) alert("Lütfen Bir Kategori Seçin!")
    }

  };


  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };


  const handleClickUpdate = (product) => {
    setSelectedProduct(product);
    setIsUpdated(true);
  };
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
        <Box zIndex={1} ml={35} width={1} >
          <Box p={6} mt={6} sx={{ width: 1 }}>
            <Container>
              <Stack>
                <Box>
                  <Typography variant='h5'>Yeni Ürün Ekleyin</Typography>
                  <Card sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: "15px",
                    mt: 2
                  }}>
                    <Button onClick={handleOpen}><AddIcon />Yeni Ürün Ekle</Button>
                  </Card>
                </Box>
                <AddProductModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} handleAddProduct={handleAddProduct} newProduct={newProduct} setNewProduct={setNewProduct} open={open} setOpen={setOpen}></AddProductModal>
              </Stack>
            </Container>
          </Box>
          <Box pl={10} pr={10} sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}>
            {products.length !== 0 ? (
              products.map((product) => (
                <Card
                  key={product.id}
                  sx={{
                    width: "calc(25% - 20px)",
                    height: "350px",
                    margin: "10px",
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {product.image ? (
                      <Box
                        sx={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "3px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={`Product ${product.id}`}
                          style={{ width: "100%" }}
                        />
                      </Box>
                    ) : <DefaultImage sx={{
                      width: "150px",
                      height: "150px",
                      opacity: ".6"
                    }}>
                    </DefaultImage>}
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography fontSize="18px" fontWeight="600">{product.head}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "200px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        textAlign: "start"
                      }}
                    >
                      <Typography>{product.content}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>{product.category}</Typography>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: "3px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography color="error">{product.price} ₺</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2
                    }}
                  >
                    <Button
                      onClick={() => handleClickUpdate(product)}
                      variant="outlined"
                      color="primary"
                    >
                      Düzenle
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Sil
                    </Button>
                  </Box>
                </Card>
              ))
            ) : (
              <Box>
                <Typography>Henüz bir ürün eklenmemiş!</Typography>
              </Box>
            )}
          </Box>
          <UpdateProductModal
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
            selectedProduct={selectedProduct}
            setProducts={setProducts}
          />
        </Box>
      </Box>
    </Box >
  )
}

export default Page