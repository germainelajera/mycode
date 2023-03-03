import { Box, Button, Paper, styled} from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import ReadResults from "./CRUD/ReadResult";

type NavProps = {
    children: React.ReactNode;
}

export default function Results (){
 
    const navigate = useNavigate();

    function handleClick(){
        navigate('/checkresults')
    }
    return (
        <div>
            <div>
                
            </div>

            <h1 style={{ color: "#FF4B4B", marginBottom: "50px" }}>
                Medical Laboratory Test Results
            </h1>
            <Button onClick={handleClick} size="small" variant="contained" sx={{ bgcolor: "#FF4B4B", marginTop: "-20px", position:"absolute", left:"220px"}}>Back</Button>

            
                <Box  
                sx={{ width: '100%' }}>
                <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>   

                <img src={'images/testresult2.png'} alt="TestResult2" style={{marginTop: 30, alignItems: "center"}}/>


            </Stack>

            </Box>
        </div>
    )
}