import axios from 'axios';

export function getFromUrl(url) {
    return axios.get(url).then(res => {
        return res
    })
}

export default {getFromUrl}