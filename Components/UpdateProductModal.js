import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

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

// ... (diğer import bildirimleri)

function UpdateProductModal({ isUpdated, setIsUpdated, selectedProduct, setProducts }) {
    const [updatedTitle, setUpdatedTitle] = useState(selectedProduct ? selectedProduct.head : "");
    const [updatedContent, setUpdatedContent] = useState(selectedProduct ? selectedProduct.content : "");
    const [updatedPrice, setUpdatedPrice] = useState(selectedProduct ? selectedProduct.price : "");
    const [updatedCategory, setUpdatedCategory] = useState(selectedProduct ? selectedProduct.category : "");
    const [updatedImage, setUpdatedImage] = useState(selectedProduct ? selectedProduct.image : null);
    const [imageFile, setImageFile] = useState(null);
    const [isImageUpdated, setIsImageUpdated] = useState(false);

    const handleClose = () => {
        setIsUpdated(false);

    };

    const handleUpdateProduct = () => {
        const updatedProducts = setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProduct.id
                    ? {
                        ...product,
                        head: updatedTitle || product.head,
                        content: updatedContent || product.content,
                        price: updatedPrice || product.price,
                        category: updatedCategory || product.category,
                        image: isImageUpdated ? updatedImage : product.image,
                    }
                    : product
            )
        );

        setIsUpdated(false);
    };

    const handleRemoveImage = () => {
        setUpdatedImage(null);  // Resmi temizle
        setIsImageUpdated(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Eğer yeni dosya mevcut dosyadan farklı ise güncelle
                if (file !== imageFile) {
                    setUpdatedImage(reader.result);
                    setIsImageUpdated(true);
                }
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    useEffect(() => {
        if (selectedProduct) {
            setUpdatedTitle(selectedProduct.head);
            setUpdatedContent(selectedProduct.content);
            setUpdatedPrice(selectedProduct.price);
            setUpdatedCategory(selectedProduct.category);
            setUpdatedImage(selectedProduct.image);
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
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="selectedLabel">Kategori</InputLabel>
                    <Select
                        labelId="selectedLabel"
                        id="selected"
                        label="categori"
                        value={updatedCategory}
                        onChange={(e) => setUpdatedCategory(e.target.value)}
                    >
                        <MenuItem value="yemek">Yemek</MenuItem>
                        <MenuItem value="sıcak içecek">Sıcak İçecek</MenuItem>
                        <MenuItem value="soğuk içecek">Soğuk İçecek</MenuItem>
                        <MenuItem value="tatlı">Tatlı</MenuItem>
                        <MenuItem value="atıştırmalık">Atıştırmalık</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 3
                }}>
                    <label
                        htmlFor="file"
                        style={{
                            padding: "5px 10px",
                            backgroundColor: "#2196f3",
                            color: "#fff",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        {updatedImage ? "Fotoğrafı Değiştir" : "Fotoğraf Ekle"}
                    </label>
                    <input
                        id='file'
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    {updatedImage && (
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "5px"
                        }}>
                            <img src={updatedImage} alt="Selected" style={{ maxWidth: '100px', marginTop: '10px' }} />
                            <CloseIcon onClick={handleRemoveImage} style={{ cursor: "pointer" }} />
                        </Box>
                    )}
                </Box>
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
