import axios from 'axios';
import { BASE_URL } from '../../config/host';
export const END_POINT = BASE_URL
const Axios = axios.create({ baseURL: END_POINT });

export default Axios;
