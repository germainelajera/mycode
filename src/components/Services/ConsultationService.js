import axios from 'axios'

const  CONSULTATION_REST_API_URL='http://localhost:3307/consultation/getAllConsultation';

class ConsultationService {
    
    getAllConsultations(){
        return axios.get(CONSULTATION_REST_API_URL);
    }

}

export default new ConsultationService();