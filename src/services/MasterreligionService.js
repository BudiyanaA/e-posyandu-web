import http from "../http-common";

const getAll = () => {
  return http.get("/masterreligions");
};

const get = id => {
  return http.get(`/masterreligions/${id}`);
};

const create = data => {
  return http.post("/masterreligions", data);
};

const update = (id, data) => {
  return http.put(`/masterreligions/${id}`, data);
};

const remove = id => {
  return http.delete(`/masterreligions/${id}`);
};

const removeAll = () => {
  return http.delete(`/masterreligions`);
};

const findByTitle = title => {
  return http.get(`/masterreligions?title=${title}`);
};

const MasterreligionService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MasterreligionService;