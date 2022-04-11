import axios from 'axios';
export const END_POINT = 'http://localhost:8080'
const Axios = axios.create({ baseURL: END_POINT });

export default Axios;
