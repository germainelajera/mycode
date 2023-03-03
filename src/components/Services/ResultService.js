import axios from 'axios'

const  RESULT_REST_API_URL='http://localhost:3307/result/getAllResults';

class ResultService {
    
    getAllResult(){
        return axios.get(RESULT_REST_API_URL);
    }

}

export default new ResultService();