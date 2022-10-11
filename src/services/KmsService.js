import http from "../http-common";

const getAll = () => {
  return http.get("/kmss");
};

const get = id => {
  return http.get(`/kmss/${id}`);
};

const create = data => {
  return http.post("/kmss", data);
};

const update = (id, data) => {
  return http.put(`/kmss/${id}`, data);
};

const remove = id => {
  return http.delete(`/kmss/${id}`);
};

const removeAll = () => {
  return http.delete(`/kmss`);
};

const findByTitle = title => {
  return http.get(`/kmss?title=${title}`);
};

const KmsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default KmsService;