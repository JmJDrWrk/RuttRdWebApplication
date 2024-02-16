import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Typography, FormControlLabel, Tooltip } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import API_community from '../../api/API_community';
const ImageUploadForm = ({communityName, contentType }) => {
    const [formData, setFormData] = useState({
        title: 'Papanoelada 2023 A Coruña!',
        description: `Inunda con nosotros la ciudad de La Coruña de color de la navidad y del ronroneo de tu moto.  El punto de reunión se encuentra en blabasbdasdbas://asdasdgh.es`,
        location: 'A Coruña, Avenida del ejército',
        taggedPeople: '',
        photo: null,
        date: "11/19/2023", // Add date field to formData
        estimatedDuration: "2h", // Add estimatedDuration field to formData
        memebersOnly: true // Add accessType field to formData
    });

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            photo: URL.createObjectURL(file)
        });
        setIsImageUploaded(true);
    };

    const handleInputChange = (e) => {
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
        // Create JSON object with form data
        formData.contentType = contentType;
        const jsonData = JSON.stringify(formData, null, 2);
        console.log(jsonData);

        setIsConfirmationOpen(false);
        /*{
            "contentType": "event",
            "title": "Papanoelada!",
            "description": "Invade la ciudad con el color de la navidad y el sonido de tu moto el domingo 19 de diciembre!!",
            "photo": "https://estaticos-cdn.prensaiberica.es/clip/a27e3d15-8a01-4baa-8d64-c0bbfca06c3d_16-9-discover-aspect-ratio_default_0.jpg",
            "location":"A Coruña, Avenida del ejército",
            "date":"11/19/2023",
            "summary":"La Papanoelada Motera de A Coruña se ha convertido, sin lugar a dudas, en uno de los eventos más esperados de la Navidad. En los últimos días se han ido conociendo los primeros detalles de la campaña de este año, cuyo encendido de luces podría retrasarse respecto a otros años, y ahora se desvela otra cita que reúne cada año a miles de motoristas por las calles de A Coruña.\nLa organización de la Papanoelada Motera de A Coruña, Moto Club Galicia y Revista Motera, acaba de desvelar a través de sus redes sociales el día en el que los miles de motoristas ataviados de Papá Noel desfilarán por las calles de la ciudad en un evento en el que se puede participar de forma gratuita y que tiene también un carácter solidario, ya que en las ediciones anteriores se solicitaba a los participantes que entregaran productos para el banco de alimentos."
        }*/
        const res = await new API_community().createCommunityContentByCommunityName(communityName, JSON.parse(jsonData))
        console.log('Published', res.data)
    };

    // const handleDateChange = (date) => {
    //     setFormData({ ...formData, date });
    // };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Subir contenido a {communityName}
            </Typography>
            <form>
                <Grid container spacing={2}>
                    {formData.photo && (
                        <Grid item xs={12}>
                            <img
                                src={formData.photo}
                                alt="Selected"
                                style={{ maxWidth: '100%', maxHeight: '300px' }}
                            />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="contained-button-file"
                            type="file"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span">
                                Upload Image
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            name="title"
                            value={formData.title}
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
                            label="Location"
                            variant="outlined"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            dateFormat="Pp"
                        /> */}
                        <TextField
                            fullWidth
                            label="Date"
                            variant="outlined"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {/* <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.estimatedDuration}
                                    onChange={handleCheckboxChange}
                                    name="estimatedDuration"
                                />
                            }
                            label="Estimated Duration"
                        /> */}
                        <TextField
                            fullWidth
                            label="Estimated time"
                            variant="outlined"
                            name="estimatedDuration"
                            value={formData.estimatedDuration}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Tooltip title="If it is not membersonly, location can be viewed by everyone ">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.memebersOnly}
                                        onChange={handleCheckboxChange}
                                        name="memebersOnly"
                                    />
                                }
                                label="MembersOnly"
                            />
                        </Tooltip>
                    </Grid>

                    <Grid item xs={12}>
                        <Tooltip title={!isImageUploaded ? "Selecciona una imagen para poder publicar" : "Publicar contenido"}>
                            <Button variant="contained" color="primary" onClick={handlePublish} disabled={!isImageUploaded}>
                                Publicar
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </form>
            <Dialog open={isConfirmationOpen} onClose={handleConfirmationClose}>
                <DialogTitle>Confirmar publicación</DialogTitle>
                <DialogContent>
                    Estás seguro de querer publicar este evento?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmationClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmPublish} color="primary">
                        Publicar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default ImageUploadForm;
