import axios, {AxiosError, AxiosResponse} from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import {BASE_URL} from '@env';

axios.defaults.withCredentials = true;

type HeadersInit = {[key: string]: string | null | undefined};

const createAPI = () => {
  let headers: HeadersInit = {};

  const api = applyCaseMiddleware(
    axios.create({
      baseURL: BASE_URL,
      timeout: 1000 * 5,
      headers,
    }),
  );

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onFail = (error: AxiosError) => {
    if (error.response) {
      console.log('onFail: ', error.response);
    } else {
      console.log('Something went wrong, try again.');
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const api = createAPI();
