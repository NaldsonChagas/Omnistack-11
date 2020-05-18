import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://192.168.15.2:8000',
});

export default api;
