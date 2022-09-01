import Cookie from "js-cookie"

export default {
    state: {
        token:''
    },
    mutations: {
        SetToken(state, val) {
            
            state.token = val
            Cookie.set('token', val)
        },
        clearToken(state) {
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state) {
            state.token = state.token || Cookie.get('token')
        }
    }
}