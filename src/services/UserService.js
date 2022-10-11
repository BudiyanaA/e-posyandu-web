import http from "../http-common";

const getAll = () => {
  return http.get("/posyandus");
};

const get = id => {
  return http.get(`/posyandus/${id}`);
};

const create = data => {
  return http.post("/posyandus", data);
};

const update = (id, data) => {
  return http.put(`/posyandus/${id}`, data);
};

const remove = id => {
  return http.delete(`/posyandus/${id}`);
};

const removeAll = () => {
  return http.delete(`/posyandus`);
};

const findByTitle = title => {
  return http.get(`/posyandus?title=${title}`);
};

const PosyanduService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default PosyanduService;