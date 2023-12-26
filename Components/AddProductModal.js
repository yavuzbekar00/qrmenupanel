import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
                <Box sx={style}>
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
                    <input type="file" onChange={handleImageChange} />
                    {selectedImage && (
                        <img src={selectedImage} alt="Selected" style={{ maxWidth: '100px', marginTop: '10px' }} />
                    )}

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
        </div>
    );
}

export default AddProductModal