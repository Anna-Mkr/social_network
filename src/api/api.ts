import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2bfbf4c6-d33b-454a-936c-f384eccc05de"
    }
});


export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getUsers2(currentPage: any, pageSize: any) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    }
}
