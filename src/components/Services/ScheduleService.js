import axios from 'axios'

const  SCHEDULE_REST_URL='http://localhost:3307/schedule/getAllSchedules';

class ScheduleService {
    
    getAllSchedule(){
        return axios.get(SCHEDULE_REST_URL);
    }

}

export default new ScheduleService();