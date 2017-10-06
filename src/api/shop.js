import axios from 'axios';

import {url} from './config';

let getShopList=(page)=>{
    return axios.get(`${url}shop?page=${page}`);
}

export {getShopList}