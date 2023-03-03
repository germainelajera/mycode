import { Box, Button, Paper, styled} from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import ReadResult from "./CRUD/ReadResult";



export default function CheckResults (){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/results')
    }
    
    return (
        <div>
            

            <h1 style={{ color: "#FF4B4B", marginBottom: "50px" }}>
                Medical Laboratory Test Results
            </h1>

            
           

            
                 
                
                <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}>   
                
                
            </Stack>
            <ReadResult/>
        </div>
    );
}