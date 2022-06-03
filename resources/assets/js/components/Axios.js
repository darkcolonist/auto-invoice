import axios from 'axios';
axios.defaults.headers.common['X-CSRF-TOKEN'] = appToken;
const instance = axios.create({ baseURL: appBaseURL });

const fallbackAndReload = (message) => {
  console.log(message+" detected, reloading page in 2 seconds.");

  setTimeout(() => {window.location.reload()}, 2000);
}

/**
 * covers:
 *  - token_mismatch
 */
instance.interceptors.response.use(
  response => {
    if (response.data.type !== undefined 
        && response.data.type === "token_mismatch"){
      fallbackAndReload("token mismatch");
    }

    return response;
  }
  ,
  error => {    
    if (error.response && 419 === error.response.status) {
      fallbackAndReload(error.statusText);
    }

  }
)

export default instance