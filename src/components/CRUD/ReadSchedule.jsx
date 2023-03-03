import "../CSS/ComponentCSS.css"
import { ConstructionOutlined } from "@mui/icons-material";
import { Component, useState } from "react";
import ScheduleService from "../Services/ScheduleService";
import React from "react";
import { Button } from "@mui/material";

class ReadSchedule extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            schedule: []
        }
    }

    componentDidMount(){
       ScheduleService.getAllSchedule().then((response) =>{
            this.setState({schedule: response.data})
        });
    }

    render(){
        
        return (
            <div className="container" style={{ textAlign: 'center'}}>
                <div className="table table-striped">
                <table className="table table-striped">
                        <thead>
                                    <th>Doctor</th>
                                    <th>Schedule Date</th>
                                    <th>Schedule Time</th>
                                    <th>Schedule Status</th>
                                    <th>Reservation fee</th>
                            
                        </thead>
                        <tbody>
                            {
                                
                                this.state.schedule.map(schedule =>
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