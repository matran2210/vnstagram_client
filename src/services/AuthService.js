import axios from "axios";
import Config from "../configs/config.json";
const handleLoginService = (username,password) =>{
    let data = {username : username,password:password}
    let res  = axios.post(Config['api_url'] + 'login',data)
    return res;
}
export {handleLoginService};