import "../CSS/ComponentCSS.css"
import { ConstructionOutlined } from "@mui/icons-material";
import { Component, useState } from "react";
import ScheduleService from "../Services/ScheduleService";
import React from "react";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

class ReadSchedule extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            schedule: [],
            filter: "all"
        }
    }

    componentDidMount(){
        ScheduleService.getAllSchedule().then((response) =>{
            this.setState({schedule: response.data})
        });
    }

    handleChange = (event) => {
        this.setState({ filter: event.target.value });
    };

    render(){
        
        let filteredSchedule = this.state.schedule;
    if (this.state.filter === "previous") {
        filteredSchedule = this.state.schedule.filter(
            (schedule) => new Date(schedule.scheduledate).getFullYear() === 2022
        );
    } else if (this.state.filter === "current") {
        filteredSchedule = this.state.schedule.filter(
            (schedule) => new Date(schedule.scheduledate).getFullYear() === 2023
        );
    }
        
        return (
            <div className="container" style={{ textAlign: 'center'}}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{borderRadius: 1, bgcolor: "#FF4B4B", marginTop: "-50px", width: 120, position:"absolute", left:"150px"}}>
                        <InputLabel id="demo-simple-select-label">Schedule</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.filter}
                            label="Schedule"
                            onChange={this.handleChange}
                        >
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="previous">Previous</MenuItem>
                            <MenuItem value="current">Current</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="table table-striped">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Schedule Date</th>
                                <th>Schedule Time</th>
                                <th>Schedule Status</th>
                                <th>Reservation fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredSchedule.map(schedule =>
                                    <tr key = {schedule.scheduleid}>
                                        <td> {schedule.doctorname}</td>
                                        <td>{schedule.scheduledate}</td>
                                        <td> {schedule.scheduletime}</td>
                                        <td> {schedule.schedulestatus}</td>
                                        <td> {schedule.reservationfee}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ReadSchedule
