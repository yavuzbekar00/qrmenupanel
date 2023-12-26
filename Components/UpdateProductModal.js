import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

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

function UpdateProductModal({ isUpdated, setIsUpdated, selectedProduct, setProducts }) {
    const [updatedTitle, setUpdatedTitle] = useState(selectedProduct ? selectedProduct.head : "");
    const [updatedContent, setUpdatedContent] = useState(selectedProduct ? selectedProduct.content : "");
    const [updatedPrice, setUpdatedPrice] = useState(selectedProduct ? selectedProduct.price : "");

    const handleClose = () => {
        setIsUpdated(false);
        setUpdatedTitle("");
        setUpdatedContent("");
        setUpdatedPrice("");
    };

    const handleUpdateProduct = () => {
        const updatedProducts = setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProduct.id
                    ? { ...product, head: updatedTitle, content: updatedContent, price: updatedPrice }
                    : product
            )
        );

        setIsUpdated(false);
    };
    useEffect(() => {
        if (selectedProduct) {
            setUpdatedTitle(selectedProduct.head);
            setUpdatedContent(selectedProduct.content);
            setUpdatedPrice(selectedProduct.price);
        }
    }, [selectedProduct]);

    return (
        <Modal
            open={isUpdated}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                    Ürünü Düzenleyin
                </Typography>
                <TextField
                    label="Başlık"
                    variant="outlined"
                    sx={{ width: "100%", mb: 2 }}
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                />
                <TextField
                    label="İçerik"
                    variant="outlined"
                    sx={{ width: "100%", mb: 2 }}
                    value={updatedContent}
                    onChange={(e) => setUpdatedContent(e.target.value)}
                />
                <TextField
                    label="Fiyat"
                    variant="outlined"
                    sx={{ width: "100%", mb: 2 }}
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}
                />
                <Box sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 2
                }}>
                    <Button onClick={handleClose} variant='outlined' color='error'>İptal Et</Button>

                    <Button variant="outlined" color="primary" onClick={handleUpdateProduct}>
                        Güncelle
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default UpdateProductModal;
