import axios from 'axios';

const SIGNUP_API_URL = "http://localhost:8080/web/signup/";

class SignupAccount{

    createAccount(signUp){
        return axios.post(SIGNUP_API_URL,signUp);
    }
}

export default new SignupAccount();