import axios from 'axios';

import {url} from './config';

let getList=(page)=>{
    return axios.get(`${url}meishi?page=${page}`);
}

export {getList}