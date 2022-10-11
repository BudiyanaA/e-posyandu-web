import http from "../http-common";

const getAll = () => {
  return http.get("/birthrecords");
};

const get = id => {
  return http.get(`/birthrecords/${id}`);
};

const create = data => {
  return http.post("/birthrecords", data);
};

const update = (id, data) => {
  return http.put(`/birthrecords/${id}`, data);
};

const remove = id => {
  return http.delete(`/birthrecords/${id}`);
};

const removeAll = () => {
  return http.delete(`/birthrecords`);
};

const findByTitle = title => {
  return http.get(`/birthrecords?title=${title}`);
};

const BirthrecordService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default BirthrecordService;