import http from "../http-common";

const getAll = () => {
  return http.get("/imunizations");
};

const get = id => {
  return http.get(`/imunizations/${id}`);
};

const create = data => {
  return http.post("/imunizations", data);
};

const update = (id, data) => {
  return http.put(`/imunizations/${id}`, data);
};

const remove = id => {
  return http.delete(`/imunizations/${id}`);
};

const removeAll = () => {
  return http.delete(`/imunizations`);
};

const findByTitle = title => {
  return http.get(`/imunizations?title=${title}`);
};

const ImunizationService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ImunizationService;