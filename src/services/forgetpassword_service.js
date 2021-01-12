import axios from 'axios';

const  Forget_API_URL = "http://localhost:8080/web/forgetpassword";

class ForgetPasswordEmail{

    forgetpassword(email){
        return axios.post(Forget_API_URL,);
    }
}
export default new ForgetPasswordEmail();