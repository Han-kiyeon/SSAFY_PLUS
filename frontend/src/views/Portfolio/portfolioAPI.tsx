import axios from "axios";

const api = axios.create({
  baseURL: "http://13.125.238.102:8080/api",
});

export const portfolioApi = {
  portfoliolist() {
    var user_email = window.sessionStorage.getItem("user_email")
      ? "/" + window.sessionStorage.getItem("user_email")
      : "";
    return api.get(`/portfolio/list${user_email}/`);
  },
};
