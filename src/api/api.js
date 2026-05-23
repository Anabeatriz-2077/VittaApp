import axios from "axios";

/*
Axios facilita chamadas de API
*/

const api = axios.create({
  baseURL: "https://randomuser.me/api/"
});

export default api;