import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultation: {
        consultationPurpose: '',
        consultationResult: ''
      }
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        'http://localhost:3307/consultation/putConsultation/?consultationid=3',
        this.state.consultation
      );
      console.log(response.data);
      alert('Updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating consultation.');
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState((prevState) => ({
      consultation: { ...prevState.consultation, [name]: value }
    }));
  };

  render() {
    const { consultation } = this.state;

    return (
      <div>
        <h1>Update Patient's Medical Record</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="consultationPurpose">Consultation Purpose:</label>
          <input
            type="text"
            id="consultationPurpose"
            name="consultationPurpose"
            value={consultation.consultationPurpose}
            onChange={this.handleInputChange}
          />
          <label htmlFor="consultationResult">Consultation Result:</label>
          <input
            type="text"
            id="consultationResult"
            name="consultationResult"
            value={consultation.consultationResult}
            onChange={this.handleInputChange}
          />
          <button type="submit" onClick={() => {
              if (!consultation.consultationPurpose || !consultation.consultationResult) {
                alert('Please fill in both fields.');
              }
            }}>Update</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
