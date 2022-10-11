import http from "../http-common";

const getAll = () => {
  return http.get("/child_nutrition");
};

const get = id => {
  return http.get(`/child_nutrition/${id}`);
};

const findByTitle = title => {
  return http.get(`/child_nutrition?title=${title}`);
};

const NutritionService = {
  getAll,
  get,
  findByTitle
};

export default NutritionService;