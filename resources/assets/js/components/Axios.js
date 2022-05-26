import axios from 'axios';
axios.defaults.headers.common['X-CSRF-TOKEN'] = appToken;
const instance = axios.create({ baseURL: appBaseURL });

/**
 * covers:
 *  - token_mismatch
 */
instance.interceptors.response.use(
  response => {
    // console.log("found", response.data);
    if (response.data.type !== undefined 
        && response.data.type === "token_mismatch"){
      console.log("token mismatch detected, reloading page.");
      window.location.reload();
      // return Promise.reject("token_mismatch");
    }

    return response;
  }
  // ,
  // error => {    
  //   if (error.response && 419 === error.response.status) {
  //   }

  // }
)

export default instance