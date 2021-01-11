import axios from "axios";

export const findKeywords = (word: string) => {
    return axios.get(`https://api.datamuse.com/words?ml=${word}`);
}