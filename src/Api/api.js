import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials : true,
    headers : {
        'API-KEY' : '08cf70a9-1552-4343-925c-5f74adee3fcc'
    }
})



const socialAPI = {
    getUsers(){
       return  instance.get('/users?count=100')
    },
    getProfile(userId){
        console.log(userId);
        return instance.get(`/profile/${userId}`)
        
    },
    login(body = {}){
        return instance.post(`/auth/login`, body)
    },
    changePhoto(file){
        let formData = new FormData()
        formData.append('file' , file)
        return instance.put('/profile/photo', formData)
    },
    changeAboutMe(data) {
        return instance.put(`/profile` , data)
    }
}

export default socialAPI