import axios from "axios";
const API_URL = "http://localhost:8080/api/user";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  checkToken() {
    if (localStorage.getItem("user")) {
      // console.log("確認 token")
      return JSON.parse(localStorage.getItem("user")).token;
    } else {
     return "";
    }
  }
}
const authService = new AuthService()

export default authService;
