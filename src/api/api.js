import * as axios from 'axios'

const instance = axios.create({ baseURL: '/api/', headers: { 'Content-Type': 'application/json' } })

export const usersAPI = {
    getUsers(page, limit) {
        return instance.get(`user?page=${page}&limit=${limit}`).then(response => response.data)
    },
    getStatistic(userId){
        return instance.get(`user/${userId}`).then(response => response.data)
    }
}