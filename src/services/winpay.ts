import axios, { AxiosInstance } from 'axios';

export const winPay = async (): Promise<AxiosInstance> => {
  return axios.create({
    baseURL: process.env.URL_WINPAY,
    auth: {
      username: process.env.HTTP_BASIC_USER,
      password: process.env.HTTP_BASIC_PASS,
    },
  });
};
