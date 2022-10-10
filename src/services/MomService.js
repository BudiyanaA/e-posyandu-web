import http from "../http-common";

const getAll = () => {
  return http.get("/moms");
};

const get = id => {
  return http.get(`/moms/${id}`);
};

const create = data => {
  return http.post("/moms", data);
};

const update = (id, data) => {
  return http.put(`/moms/${id}`, data);
};

const remove = id => {
  return http.delete(`/moms/${id}`);
};

const removeAll = () => {
  return http.delete(`/moms`);
};

const findByTitle = title => {
  return http.get(`/moms?title=${title}`);
};

const MomService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MomService;