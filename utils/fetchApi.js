import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com"


  export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '490225e110mshe043d2638c55bddp112175jsn21f76759a227',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
  }