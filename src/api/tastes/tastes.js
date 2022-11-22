import { axiosInstance } from "../axios";

const baseUrl = "/tastes";

export const getTasteList = () =>
  axiosInstance
    .get(`${baseUrl}/`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const getTasteById = (id) =>
  axiosInstance
    .get(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const createTaste = (cake) =>
  axiosInstance
    .post(`${baseUrl}/`, cake)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });

export const deleteTaste = (id) =>
  axiosInstance
    .delete(`${baseUrl}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw JSON.stringify(err.response?.data);
    });
