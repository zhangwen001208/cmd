import axios from 'axios'


export const getData = () => {
    return axios.request({
        url: '/home/getData'
       
    })
}

export const getUser = () => {
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        
       
    })
}

