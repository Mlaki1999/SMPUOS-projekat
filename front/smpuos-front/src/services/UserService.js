import axios from 'axios'
// import config from '../config/config'

const userService ={
    login: (user) => {
        return axios.post(
            'http://localhost:8081/auth/login',
            user
        );
    },
    register: (user) => {
        return axios.post(
            'http://localhost:8081/auth/register',
            user
        );
    },
};
export default userService;