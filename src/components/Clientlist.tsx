
import { Box, Button, Card, CardActions, CardContent, Paper, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import ReadConsultation from './CRUD/ReadConsultation';



 

export default function UpdateandCheckMedHistory (){
    return (
        <div>
            <Paper elevation={1} sx={{bgcolor: "#408128", marginLeft: 5, marginTop: 10, height: 60, width: "42%", borderRadius: 6}}>
            
            
      <CardContent>
<Typography  sx={{ fontSize: 20, textAlign: "center"  }} color="white"  gutterBottom>Germaine Lajera | 12/03/2022
</Typography>
        
      </CardContent>
      <Paper elevation={1} sx={{bgcolor: "#f4dada", marginLeft: 1, marginTop: "5px", height: 500, width: 610, borderRadius: 0}}>
      <CardActions>
      <Button variant="contained" sx={{top: "20px", bgcolor: "#FF4B4B", left:"80px", borderRadius: 4}}>
                Add Prescription
            </Button>
        <Button variant="contained" sx={{top: "20px", bgcolor: "#FF4B4B", left:"200px", borderRadius: 4}}>
                Update
            </Button>
            
      </CardActions>
                </Paper>
    
      </Paper>
      

            <Stack >
            <Button  variant="contained" sx={{ bgcolor: "#FF4B4B", bottom: "1px", position:"absolute", right:"350px", borderRadius: 4}}>
                Save
            </Button>
            </Stack>
            <ReadConsultation/>
            
            <Paper elevation={2} sx={{color: 'white', textAlign: "center", bgcolor: "#408128", marginLeft: 90, marginTop: -65, width: "50%", height: 40, borderRadius: 6}}>
            Medical Records </Paper>
            <Paper elevation={3} sx={{ bgcolor: "#f4dada", marginLeft: 90, marginTop: "15px" , width: "50%", height: 480, borderRadius: 0}}>
                
                                        </Paper>
        </div>
    )
}