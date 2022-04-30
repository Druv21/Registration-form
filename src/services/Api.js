import axios from 'axios';

export const fetchApi=async()=>{
    const res=await axios.get("https://eventformconatus.herokuapp.com/");
    return res;
} 