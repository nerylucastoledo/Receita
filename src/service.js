import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export const api = {
    get(endpoint) {
        return instance.get(endpoint)
    },
    post(endpoint, body) {
        return instance.post(endpoint, body)
    },
    delete(endpoint) {
        return instance.delete(endpoint)
    },
    put(endpoint, body) {
        return instance.put(endpoint, body)
    }
}