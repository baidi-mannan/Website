import axios from 'axios';
const instance = axios.create({

});
instance.interceptors.request.use(function (config) {
    document.body.classList.add('loading-indicator');
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  
instance.interceptors.response.use(function (response) {
    document.body.classList.remove('loading-indicator');
    return response;
  }, function (error) {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error);
  });

export default instance;