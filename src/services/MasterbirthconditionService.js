import http from "../http-common";

const getAll = () => {
  return http.get("/masterbirthconditions");
};

const get = id => {
  return http.get(`/masterbirthconditions/${id}`);
};

const create = data => {
  return http.post("/masterbirthconditions", data);
};

const update = (id, data) => {
  return http.put(`/masterbirthconditions/${id}`, data);
};

const remove = id => {
  return http.delete(`/masterbirthconditions/${id}`);
};

const removeAll = () => {
  return http.delete(`/masterbirthconditions`);
};

const findByTitle = title => {
  return http.get(`/masterplaces?title=${title}`);
};

const MasterbirthconditionService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default MasterbirthconditionService;