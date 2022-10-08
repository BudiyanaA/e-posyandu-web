import http from "../http-common";

const getAll = () => {
  return http.get("/mastervaksins");
};

const get = id => {
  return http.get(`/mastervaksins/${id}`);
};

const create = data => {
  return http.post("/mastervaksins", data);
};

const update = (id, data) => {
  return http.put(`/mastervaksins/${id}`, data);
};

const remove = id => {
  return http.delete(`/mastervaksins/${id}`);
};

const removeAll = () => {
  return http.delete(`/mastervaksins`);
};

const findByTitle = title => {
  return http.get(`/mastervaksins?title=${title}`);
};

const MastervaksinService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MastervaksinService;