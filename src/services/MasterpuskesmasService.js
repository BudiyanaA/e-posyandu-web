import http from "../http-common";

const getAll = () => {
  return http.get("/masterpuskesmas");
};

const get = id => {
  return http.get(`/masterpuskesmas/${id}`);
};

const create = data => {
  return http.post("/masterpuskesmas", data);
};

const update = (id, data) => {
  return http.put(`/masterpuskesmas/${id}`, data);
};

const remove = id => {
  return http.delete(`/masterpuskesmas/${id}`);
};

const removeAll = () => {
  return http.delete(`/masterpuskesmas`);
};

const findByTitle = title => {
  return http.get(`/masterpuskesmas?title=${title}`);
};

const MasterpuskesmasService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MasterpuskesmasService;