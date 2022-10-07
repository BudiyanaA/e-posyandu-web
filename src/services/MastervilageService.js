import http from "../http-common";

const getAll = () => {
  return http.get("/mastervilages");
};

const get = id => {
  return http.get(`/mastervilages/${id}`);
};

const create = data => {
  return http.post("/mastervilages", data);
};

const update = (id, data) => {
  return http.put(`/mastervilages/${id}`, data);
};

const remove = id => {
  return http.delete(`/mastervilages/${id}`);
};

const removeAll = () => {
  return http.delete(`/mastervilages`);
};

const findByTitle = title => {
  return http.get(`/mastervilages?title=${title}`);
};

const MastervilageService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MastervilageService;