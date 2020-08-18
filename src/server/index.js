import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.128.129.159/Black-Kardd/index.php/user',
});

export default api;
