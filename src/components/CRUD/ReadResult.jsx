import React from "react";
import ResultService from "../Services/ResultService";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

class ReadResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      chosenResult: Object,
      chosenRecord: Object,
      open: false,
      sortByDateAsc: true, // added state to track date sorting order
    };
  }

  componentDidMount() {
    ResultService.getAllResult().then((response) => {
      this.setState({ result: response.data });
    });
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  sortByName = () => {
    const { sortByNameOrder } = this.state; // get current sorting order
    const sortedResult = [...this.state.result].sort((a, b) =>
      sortByNameOrder === 'asc'
        ? a.resultname.localeCompare(b.resultname)
        : b.resultname.localeCompare(a.resultname) // sort in descending order if order is 'desc'
    );
    this.setState({
      result: sortedResult,
      sortByNameOrder: sortByNameOrder === 'asc' ? 'desc' : 'asc', // toggle sorting order
    });
  };

  sortByDate = () => {
    const sortedResult = this.state.result.sort((a, b) => {
      const dateA = new Date(a.resultdate);
      const dateB = new Date(b.resultdate);
      if (this.state.sortByDateAsc) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }

    });
    this.setState((prevState) => ({
      result: sortedResult,
      sortByDateAsc: !prevState.sortByDateAsc, // toggle sorting order
    }));
  };

  sortByID = () => {
    const sortedResult = this.state.result.sort((a, b) => {
        if (this.state.sortByIDAsc) {
            return a.resultid - b.resultid;
        } else {
            return b.resultid - a.resultid;
        }
    });
    this.setState({ result: sortedResult, sortByIDAsc: !this.state.sortByIDAsc });
}

    StyledSortButton = styled(Button)(() => ({
    backgroundColor: "#FF4B4B",
    fontSize: "14px",
    padding: "8px 16px",
    position: "absolute",
    left: "230px",
    top: "180px",
  }));


    StyledDateButton = styled(Button)(() => ({
    backgroundColor: "#FF4B4B",
    fontSize: "14px",
    padding: "8px 16px",
    position: "absolute",
    left: "400px",
    top: "180px",
  }));

    StyledPatientIDButton = styled(Button)(() => ({
    backgroundColor: "#FF4B4B",
    fontSize: "14px",
    padding: "8px 16px",
    position: "absolute",
    left: "508px",
    top: "180px",
  }));

  StyledViewButton = styled(Button)(() => ({
    backgroundColor: "#FF4B4B",
    fontSize: "18px",
    height: "30px",
    color: "white",
  }));

  render() {
    return (
      <div>
        <Stack direction="row" spacing={2}>
        <this.StyledSortButton variant="contained" onClick={this.sortByName}>
            Sort by Name {this.state.sortByNameOrder === 'asc' ? '▼' : '▲'}
          </this.StyledSortButton>
          <this.StyledDateButton variant="contained" onClick={this.sortByDate}>
            {this.state.sortByDateAsc ? ' Date ▼' : ' Date ▲'}
          </this.StyledDateButton>
          <this.StyledPatientIDButton variant="contained" onClick={this.sortByID}>
          {this.state.sortByIDAsc ? ' ID ▼' : ' ID ▲'}
            </this.StyledPatientIDButton>
        </Stack>
        <table className="table table-striped">
          <thead>
            <br />
            <br />
            <tr className="table table-striped">
              <th className="table table-striped">PATIENT ID</th>
              <th>PATIENT NAME</th>
              <th>RESULT DATE</th>
            </tr>
          </thead>
          <tbody>
                        {
                            this.state.result.map(result =>
                                <tr key={result.resultid} style={{border: "1"}}>
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