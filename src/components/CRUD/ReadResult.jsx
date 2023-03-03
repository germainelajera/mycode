import "../CSS/ComponentCSS.css"
import { ConstructionOutlined } from "@mui/icons-material";
import { Component, useState } from "react";
import ResultService from "../Services/ResultService";
import React from "react";
import { Button, Stack, Modal, Box } from "@mui/material";
import { useFetcher } from "react-router-dom";
import { styled } from '@mui/material/styles';


class ReadResult extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            result: [],
            chosenResult: Object,
            chosenRecord: Object,
            open: false
        }
    }

    componentDidMount(){
        ResultService.getAllResult().then((response) =>{
            this.setState({result: response.data})
        });
    }

    
    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });

    StyledButton = styled(Button)(() => ({
        backgroundColor: '#FF4B4B',
        fontSize: '18px',
        position: "absolute",
        left: "160px",
        top: "160px",

        
    }));

    StyledViewButton = styled(Button)(() => ({
        backgroundColor: '#FF4B4B',
        fontSize: '18px',
        height: '30px',
        color: 'white',

    }));

    
    render(){

            return(
                <div>   
                    

                    <this.StyledButton variant="contained" >
                        Filter by Name
                    </this.StyledButton>
                    <table className="table table-striped">
                        <thead>
                            <br/><br/>
                            <tr className="table table-striped">
                            
                                <th className="table table-striped">PATIENT ID</th>
                                <th>PATIENT NAME</th>
                                <th>RESULT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                this.state.result.map(result =>
                                    <tr key = {result.resultid} style={{border: "1"}}>
                                        <td  className="table table-striped"> {result.resultid}</td>
                                        <td > {result.resultname}</td>
                                        <td > {result.resultdate}</td>
                                        <td style={{border: 'none'}}>
                                            <this.StyledViewButton onClick={() => {
                                                this.handleOpen();
                                                this.setState({
                                                        chosenResult: result, chosenRecord: result.record
                                                });
                                            }}>
                                                        View Result
                                                    </this.StyledViewButton>
                                                    

                                        </td>
                                    </tr>
                                    
                                    
                                )
                            }
                        </tbody>
                    </table>
                    <Modal open={this.state.open} onClose={this.handleClose} >
                        <Box
                            sx={{
                                border: '3px solid #FF4B4B',
                                width: '40%',
                                height: '500px',
                                borderRadius: '20px',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                p: 4,
                                margin: 'auto',
                            }}>
          <Stack direction="row" spacing={2}>
                                
          <Stack>   <p className='RecordHeaders'>Result ID</p>
                    <p className='RecordDetails'>{this.state.chosenRecord.recordid}</p></Stack>
                                
                                
           <Stack> <p className='RecordHeaders'>Result Name</p>
                   <p className='RecordDetails'>{this.state.chosenResult.resultname}</p></Stack>
                                
                                
           <Stack>  <p className='RecordHeaders'>Result Date</p>
                    <p className='RecordDetails'>{this.state.chosenResult.resultdate}</p></Stack>
                                

            </Stack>

            <Stack>
                    <p className='RecordHeaders' > Result Status </p>
                    <p className='RecordDetails' > {this.state.chosenResult.resultstatus}</p>
                </Stack>
                </Box>
                </Modal>
                    </div>

            
                    )
    }
}

export default ReadResult