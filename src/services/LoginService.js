import http from "../http-common";

const create = data => {
    return http.post("/auth/signin", data);
  };

  const LoginService = { 
    create,
  };
  
  export default LoginService;