import axios from "axios";

const url = "https://api.themoviedb.org/3/";
const api = "5d4795d808889e47fb760dab465b15e7"

const endpoints = {
    orignals : "discover/tv",
    trending : "trending/all/week",
    now_playing : "movie/now_playing",
    popular : "movie/popular",
    top_rated : "movie/top_rated",
    upcoming : "movie/upcoming",
};

export const fetchData = (props) => {
    return axios.get(`${url}/${endpoints[props.param]}?api_key=${api}`)
}