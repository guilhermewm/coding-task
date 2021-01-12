import axios from 'axios';

const DATAMUSE_API_URL = 'https://api.datamuse.com/';

export const findKeywords = (word: string) => {
    return axios.get(`${DATAMUSE_API_URL}/words?ml=${word}`);
}
