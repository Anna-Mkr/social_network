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
    follow(userId: any) {
      return  instance.post(`follow/${userId}`)
    },
    unfollow(userId: any) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: any) {
        return instance.get(`profile/` + userId)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}


