import "../CSS/ComponentCSS.css"
import { ConstructionOutlined } from "@mui/icons-material";
import { Component, useState } from "react";
import ConsultationService from "../Services/ConsultationService";
import DoctorService from "../Services/DoctorService";
import React from "react";
import { Buttonm, Stack } from "@mui/material";
import { useFetcher } from "react-router-dom";
import Paper from '@mui/material/Paper';

class ReadConsultation extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            consultation: [],
        }
    }


    componentDidMount(){
        ConsultationService.getAllConsultations().then((response) =>{
            this.setState({consultation: response.data})
        });
    }


    
    render(){

                    return(
                    
                    <table class="right">
                        <thead >
                            <tr>
                            
                            
                                
                            </tr>
                                
                        </thead>
                        <tbody>
                            {
                                
                                this.state.consultation.map(consultation =>
                                    
                                    <tr key = {consultation.consultationId} >
                                        <br/><br/><br/><br/>
                                        <Stack direction="row" spacing={3}>
                                        <Stack>
                                        <p className='RecordHeaders3'>Consultation ID</p>
                                        <p className='RecordDetails3'>{consultation.consultationId}</p>
                                        </Stack>
                                        <Stack>
                                        <p className='RecordHeaders3'>Patient ID</p>
                                        <p className='RecordDetails3'>{consultation.patient.patientId}</p>
                                        </Stack>
                                        <Stack>
                                        <p className='RecordHeaders3'>Date of Consultation</p>
                                        <p className='RecordDetails3'>{consultation.consultationDate}</p>
                                        </Stack>
                                        </Stack> 
                                        
                                        
                                        <p className='RecordHeaders4'>Consultation Purpose </p>
                                        <p className='RecordDetails4'>{consultation.consultationPurpose}</p>
                                
                                        <p className='RecordHeaders4'>Consultation Result</p>
                                        <p className='RecordDetails4'>{consultation.consultationResult}</p>
                                        
                                    </tr>
                                        
                                )
                            }           
                            
                                        
                                        
                            
                        </tbody>
                    </table>
                                        
                    
                    )
    }
}

export default ReadConsultation