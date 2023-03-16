import { Box, Button, Menu} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReadSchedule from "./CRUD/ReadSchedule";


type NavProps = {
    children: React.ReactNode;
}

export default function CheckAppointments (){
    
  const [age, setAge] = React.useState('');
 
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

    return (
        <div>

            <h1 style={{ color: "#FF4B4B", marginBottom: "50px" }}>
                Schedules
            </h1>
           
            
      
            <Stack >
            </Stack>
            <ReadSchedule/>
        </div>
       
    )
    }