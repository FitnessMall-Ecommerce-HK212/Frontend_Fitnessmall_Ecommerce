import axios from 'axios';
export const END_POINT = 'http://fitnessmall.herokuapp.com'
const Axios = axios.create({ baseURL: END_POINT });

export default Axios;
