import axios from 'axios'
// import config from '../config/config'

const statisticService ={
    create: (statistic) => {
        return axios.post(
            'http://localhost:8085/statistics',
            statistic
        );
    },
    update: (id, statistic) => {
        return axios.put(
            `http://localhost:8085/statistics/${id}`,
            statistic
        );
    },
    delete: (id) => {
        return axios.delete(
            `http://localhost:8085/statistics/${id}`
        );
    },
    getOne: (id) => {
        return axios.get(
            `http://localhost:8085/statistics/${id}`
        );
    },
    getAll: () => {
        return axios.get(
            `http://localhost:8085/statistics`
        );
    }
};
export default statisticService;