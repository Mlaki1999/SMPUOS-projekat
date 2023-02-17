import axios from 'axios'
// import config from '../config/config'

const gameService ={
    create: (statistic) => {
        return axios.post(
            'http://localhost:8085/games',
            statistic
        );
    },
    update: (id, statistic) => {
        return axios.put(
            `http://localhost:8085/games/${id}`,
            statistic
        );
    },
    delete: (id) => {
        return axios.delete(
            `http://localhost:8085/games/${id}`
        );
    },
    getOne: (id) => {
        return axios.get(
            `http://localhost:8085/games/${id}`
        );
    },
    getAll: () => {
        return axios.get(
            `http://localhost:8085/games`
        );
    },
    getByStatistic: (id) => {
        return axios.get(
          `http://localhost:8085/games/statistics/${id}/games`
        );
    },
    report: (statistics) => {
        return axios.post(
            `http://localhost:8089/generating/ab`,
            statistics
        );
    }
};
export default gameService;