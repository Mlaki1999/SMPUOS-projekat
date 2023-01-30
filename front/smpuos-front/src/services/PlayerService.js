import axios from 'axios'
// import config from '../config/config'

const playerService ={
    create: (player) => {
        return axios.post(
            'http://localhost:8085/players',
            player
        );
    },
    update: (id, player) => {
        return axios.put(
            `http://localhost:8085/players/${id}`,
            player
        );
    },
    delete: (id, player) => {
        return axios.delete(
            `http://localhost:8085/players/${id}`,
            player
        );
    },
    getOne: (id) => {
        return axios.get(
            `http://localhost:8085/players/${id}`
        );
    }
};
export default playerService;