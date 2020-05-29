import http from "./baseApi.service";

const apiProduto = '/produtos';

const getAll = async () => {
  return await http.get(`${apiProduto}`);
};

const get = async id => {
  return await http.get(`${apiProduto}/${id}`);
};

const create = async data => {
  return await http.post(`${apiProduto}`, data);
};

const update = async (id, data) => {
  return await http.put(`${apiProduto}/${id}`, data);
};

const remove = async id => {
  return await http.delete(`${apiProduto}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};