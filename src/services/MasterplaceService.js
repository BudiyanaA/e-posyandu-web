import http from "../http-common";

const getAll = () => {
  return http.get("/masterplaces");
};

const get = id => {
  return http.get(`/masterplaces/${id}`);
};

const create = data => {
  return http.post("/masterplaces", data);
};

const update = (id, data) => {
  return http.put(`/masterplaces/${id}`, data);
};

const remove = id => {
  return http.delete(`/masterplaces/${id}`);
};

const removeAll = () => {
  return http.delete(`/masterplaces`);
};

const findByTitle = title => {
  return http.get(`/masterplaces?title=${title}`);
};

const MasterplaceService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MasterplaceService;