import axios from 'axios';
export const END_POINT = 'https://fitnessmall.herokuapp.com'
const Axios = axios.create({ baseURL: END_POINT });

export default Axios;
