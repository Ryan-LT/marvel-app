import axios from 'axios'
import CryptoJS from 'crypto-js'

const PRIV_KEY = "0577ee6a17331d9bf7b3ce2fee226a7664c681c7";
const PUBLIC_KEY = "b1a2971390cc3f558035272fe497270f";
const API_URL = 'http://gateway.marvel.com:80/v1/public/characters';

export const getListCharacter = (rowsPerPage, pageNum) => {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

    return axios.get(API_URL, {
        params: {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            limit: rowsPerPage,
            offset: pageNum * rowsPerPage
        }
    })
};

export const getCharacterDetail = (id) => {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    return axios.get(API_URL, {
        params: {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash,
            id: id
        }
    })
};

export const getCharacterAdditionalData = (url) => {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
    return axios.get(url, {
        params: {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash
        }
    })
};
