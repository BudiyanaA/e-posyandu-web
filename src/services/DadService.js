import http from "../http-common";

const getAll = () => {
  return http.get("/dads");
};

const get = id => {
  return http.get(`/dads/${id}`);
};

const create = data => {
  return http.post("/dads", data);
};

const update = (id, data) => {
  return http.put(`/dads/${id}`, data);
};

const remove = id => {
  return http.delete(`/dads/${id}`);
};

const removeAll = () => {
  return http.delete(`/dads`);
};

const findByTitle = title => {
  return http.get(`/dads?title=${title}`);
};

const DadService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default DadService;