import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import API_community from '../../api/API_community';
import { redirect } from 'react-router-dom';

const MotorcyclersCommunityCreateForm = () => {
    const [formData, setFormData] = useState({
        bannerPhoto: null,
        communityLogo: null,
        name: '',
        description: '',
        welcomeText: '',
        joinType: 'allowEveryone',
    });

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleImageUpload = (e, field) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            [field]: URL.createObjectURL(file)
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePublish = () => {
        setIsConfirmationOpen(true);
    };

    const handleConfirmationClose = () => {
        setIsConfirmationOpen(false);
    };

    const handleConfirmPublish = async () => {
        const jsonData = JSON.stringify(formData, null, 2);
        console.log(jsonData);
        const res = await new API_community().createCommunity(formData)
        if (res.data && !res.error) {
            setIsConfirmationOpen(false);
            redirect('/')
        } else {
            //Show bad info here
        }
    };

    return (
        <Container maxWidth="sm">
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="banner-photo-upload"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 'bannerPhoto')}
                        />
                        <label htmlFor="banner-photo-upload">
                            <Button variant="contained" component="span">
                                Upload Banner Photo
                            </Button>
                        </label>
                    </Grid>
                    {formData.bannerPhoto && (
                        <Grid item xs={12}>
                            <img
                                src={formData.bannerPhoto}
                                alt="Banner"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="logo-photo-upload"
                            type="file"
                            onChange={(e) => handleImageUpload(e, 'communityLogo')}
                        />
                        <label htmlFor="logo-photo-upload">
                            <Button variant="contained" component="span">
                                Upload Logo Photo
                            </Button>
                        </label>
                    </Grid>
                    {formData.communityLogo && (
                        <Grid item xs={12} style={{ position: 'relative' }}>
                            <img
                                src={formData.bannerPhoto}
                                alt="Banner"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <img
                                src={formData.communityLogo}
                                alt="Logo"
                                style={{ position: 'absolute', top: 0, right: 0, maxHeight: '100px', maxWidth: '100px' }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Name (unique)"
                            variant="outlined"
                            multiline
                            rows={3}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Welcome Text"
                            variant="outlined"
                            multiline
                            rows={4}
                            name="welcomeText"
                            value={formData.welcomeText}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Join Type</InputLabel>
                            <Select
                                label="Join Type"
                                name="joinType"
                                value={formData.joinType}
                                onChange={handleSelectChange}
                            >
                                <MenuItem value="allowEveryone">Allow Everyone</MenuItem>
                                <MenuItem value="acceptManually">Accept Manually</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handlePublish}>
                            Create Community
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Dialog open={isConfirmationOpen} onClose={handleConfirmationClose}>
                <DialogTitle>Confirm Publish</DialogTitle>
                <DialogContent>
                    Are you sure you want to create this community?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmPublish} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default MotorcyclersCommunityCreateForm;
