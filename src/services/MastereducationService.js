import http from "../http-common";

const getAll = () => {
  return http.get("/mastereducations");
};

const get = id => {
  return http.get(`/mastereducations/${id}`);
};

const create = data => {
  return http.post("/mastereducations", data);
};

const update = (id, data) => {
  return http.put(`/mastereducations/${id}`, data);
};

const remove = id => {
  return http.delete(`/mastereducations/${id}`);
};

const removeAll = () => {
  return http.delete(`/mastereducations`);
};

const findByTitle = title => {
  return http.get(`/mastereducations?title=${title}`);
};

const MastereducationService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MastereducationService;