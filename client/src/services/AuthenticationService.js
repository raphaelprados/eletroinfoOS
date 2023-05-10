import Api from '@/services/api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    } 
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })