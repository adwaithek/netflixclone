import axios from  'axios';


//instance creation

//create() - axios 

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3"
})

export default instance
