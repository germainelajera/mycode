import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';

import CheckResults from './CheckResults';
import UpdateandCheckMedHistory from './Clientlist';
import CheckAppointments from './CheckAppointment';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Nav() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{backgroundColor: "#FF4B4B", color: "#ffffff" , width:"1500px", height: "50px"}} >
        <img src={'images/remedlogo.png'} alt="RemeDLogo" width={60} height={50} style={{float: "left"}}/>
          <TabList onChange={handleChange} aria-label="lab API tabs example"sx={{  display:'inline-block', paddingLeft: '30px' }} >
            
            <Tab component={Link} to="/checkresults" label="Check Medical Laboratory Test Results" value="0" style={{color: '#FFFFFF', fontFamily: 'Sarala'}}/>
            <Tab component={Link} to="/clientlist"label="Client List" value="1" style={{color: '#FFFFFF', fontFamily: 'Sarala'}}/>
            <Tab component={Link} to="/checkappointment"label="Appointments" value="2" style={{color: '#FFFFFF', fontFamily: 'Sarala'}}/>
          </TabList>

        </Box>
       
        
      </TabContext>
    </Box>
  );
}