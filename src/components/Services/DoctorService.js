import axios from 'axios'

const  DOCTOR_REST_API_URL='http://localhost:3307/doctor/displayDoctors';

class DoctorService {
    
    getAllDoctor(){
        return axios.get(DOCTOR_REST_API_URL);
    }

}

export default new DoctorService();