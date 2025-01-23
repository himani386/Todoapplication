import axios, { AxiosRequestConfig, Method } from 'axios';


async function apiConnector(
    method: Method,
  url: string,
  data?: Record<string, any>,
  headers?: Record<string, string>,
  params?: Record<string, any>
 ) {
  try {
    const config: AxiosRequestConfig = {
      url:`http://localhost:4000/${url}`,
      method,
      headers,
      params,
      data,
    };

    const response = await axios(config);
    return  response.data

  } catch (error: any) {
    if (error.response) {
      // API responded with a status outside the 2xx range
      console.error('API error:', error.response.data);
      return error.response.data;
    } else {
      // Network or other errors
      console.error('Unexpected error:', error.message);
      throw new Error(error.message);
    }
  }
}

export default apiConnector;
