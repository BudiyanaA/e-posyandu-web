import http from "../http-common";

const getAll = () => {
  return http.get("/childs");
};

const get = id => {
  return http.get(`/childs/${id}`);
};

const create = data => {
  return http.post("/childs", data);
};

const update = (id, data) => {
  return http.put(`/childs/${id}`, data);
};

const remove = id => {
  return http.delete(`/childs/${id}`);
};

const removeAll = () => {
  return http.delete(`/childs`);
};

const findByTitle = title => {
  return http.get(`/childs?title=${title}`);
};

const ChildService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ChildService;