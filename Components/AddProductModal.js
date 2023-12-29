import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';



function AddProductModal({ setOpen, open, newProduct, setNewProduct, handleAddProduct, setSelectedImage, selectedImage }) {
    const handleClose = () => setOpen(false);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                        Bir Ürün Ekleyin
                    </Typography>
                    <TextField
                        value={newProduct.head}
                        onChange={(e) => setNewProduct({ ...newProduct, head: e.target.value })}
                        label="Başlık"
                        variant="outlined"
                        sx={{ width: "100%", mb: 1 }}
                    />
                    <TextField
                        value={newProduct.content}
                        onChange={(e) => setNewProduct({ ...newProduct, content: e.target.value })}
                        label="İçerik"
                        variant="outlined"
                        sx={{ width: "100%", mb: 1 }}
                    />
                    <TextField
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        label="Fiyat"
                        variant="outlined"
                        sx={{ width: "100%", mb: 1 }}
                    />
                    <Box>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="selectedLabel" >Kategori</InputLabel>
                            <Select
                                labelId="selectedLabel"
                                id="selected"
                                label="categori"
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                            >
                                <MenuItem value="yemek">Yemek</MenuItem>
                                <MenuItem value="sıcak içecek">Sıcak İçecek</MenuItem>
                                <MenuItem value="soğuk içecek">Soğuk İçecek</MenuItem>
                                <MenuItem value="tatlı">Tatlı</MenuItem>
                                <MenuItem value="atıştırmalık">Atıştırmalık</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <label for="file"
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "#2196f3",
                                color: "#fff",
                                borderRadius: "5px"
                            }}
                        >{selectedImage ? "Fotoğrafı Değiştir" : "Fotoğraf Ekle"}</label>
                        <input id='file' type="file" onChange={handleImageChange} style={{ display: "none" }} />
                        {selectedImage && (
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "5px"
                            }}>
                                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100px', marginTop: '10px' }} />
                                <CloseIcon onClick={() => setSelectedImage("")}></CloseIcon>
                            </Box>
                        )}
                    </Box>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                        gap: 2
                    }}>
                        <Button onClick={handleClose} variant='outlined' color='error'>İptal Et</Button>
                        <Button onClick={handleAddProduct} variant='outlined'>Ekle</Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}

export default AddProductModal