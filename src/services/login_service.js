import axios from 'axios';

const  logIn_API_URL = "http://localhost:8080/web/login";

class logInAccount{

    getAccount(login){
        return axios.post(logIn_API_URL,login);
    }
}

export default new logInAccount();