import { axiosInstance } from "../axios";

const baseUrl = "/cakes";

export const getCakeList = () =>
  axiosInstance
    .get(`${baseUrl}/`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const getCakeById = (id) =>
  axiosInstance
    .get(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const createCake = (cake) =>
  axiosInstance
    .post(`${baseUrl}/`, cake)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const deleteCake = (id) =>
  axiosInstance
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });
