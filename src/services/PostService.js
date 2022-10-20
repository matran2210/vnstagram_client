import axios from "axios";
import Config from "../configs/config.json";

const loadListPostService = () => {

    let storage = JSON.parse(localStorage.getItem('persist:auth'));
    let auth = JSON.parse(storage.auth);
    let config = {
        headers: { Authorization: `Bearer ${auth.accessToken}` }
    };
    let res = axios.get(Config['api_url'] + 'posts',config)
    return res;
}


const createPostService = (data) => {

    let storage = JSON.parse(localStorage.getItem('persist:auth'));
    let auth = JSON.parse(storage.auth);
    let config = {
        headers: { Authorization: `Bearer ${auth.accessToken}` }
    };
    let res = axios.post(Config['api_url'] + 'posts', data, config)
    return res;
}


export { createPostService,loadListPostService };