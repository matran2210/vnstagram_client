import axios from "axios";
import Config from "../configs/config.json";
const createPost = (data) =>{
    let res  = axios.post(Config['api_url'] + 'login',data)
    return res;
}
export {createPost};