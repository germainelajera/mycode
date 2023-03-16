
import { Box, Button, Card, CardActions, CardContent, Modal, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import ReadConsultation from './CRUD/ReadConsultation';
import MyComponent from './CRUD/UpdateConsultation';

export default function UpdateandCheckMedHistory () {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        window.location.reload();
      };

    return (
        <div>
            <Paper elevation={1} sx={{bgcolor: "#408128", marginLeft: 5, marginTop: 10, height: 60, width: "42%", borderRadius: 6}}>
                <CardContent>
                    <Typography sx={{ fontSize: 20, textAlign: "center" }} color="white" gutterBottom>
                        Germaine Lajera | 12/03/2022
                    </Typography>
                </CardContent>
                <Paper elevation={1} sx={{bgcolor: "#f4dada", marginLeft: 1, marginTop: "5px", height: 500, width: 610, borderRadius: 0}}>
                    <CardActions>
                        <Button variant="contained" sx={{top: "20px", bgcolor: "#FF4B4B", left:"80px", borderRadius: 4}}>
                            Add Prescription
                        </Button>
                        <Button variant="contained" sx={{top: "20px", bgcolor: "#FF4B4B", left:"200px", borderRadius: 4}} onClick={handleOpen}>
                            Update
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                        >
                            <Box sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", borderRadius: 2, width: "50%", p: 4}}>
                            <Typography id="modal-title" fontSize={20} sx={{textAlign: "center", mb: 2}}><MyComponent/>
                                </Typography>
                                <Button variant="contained" sx={{bgcolor: "#FF4B4B", color: "white", mx: "auto", display: "block", mt: 2}} onClick={handleClose}>
                                    Close
                                </Button>
                            </Box>
                        </Modal>
                    </CardActions>
                </Paper>
            </Paper>
            <Stack>
                <Button variant="contained" onClick={handleClick} sx={{ bgcolor: "#FF4B4B", bottom: "1px", position:"absolute", right:"350px", borderRadius: 4}}>
                    Save
                </Button>
            </Stack>
            <ReadConsultation/>
            <Paper elevation={2} sx={{color: 'white', textAlign: "center", fontsize: 20, bgcolor: "#408128", marginLeft: 90, marginTop: -65, width: "50%", height: 40, borderRadius: 6}}>
                Medical Records
            </Paper>
            <Paper elevation={3} sx={{ bgcolor: "#f4dada", marginLeft: 90, marginTop: "15px" , width: "50%", height: 480, borderRadius: 0}}>
            </Paper>
        </div>
    )
}
