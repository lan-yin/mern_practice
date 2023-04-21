import axios from "axios";
import AuthService from "../services/auth.service";
const API_URL = "http://localhost:8080/api/courses";

class CourseService {
  post(title, description, price) {
    let token = AuthService.checkToken();
    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 使用 student id ，來找到學生註冊的課程
  getEnrolledCourse(_id) {
    let token = AuthService.checkToken();

    return axios.get(API_URL + "/student/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  // 使用 instructor id ，來找到講師擁有的課程
  get(_id) {
    let token = AuthService.checkToken();

    return axios.get(API_URL + "/instructor/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCourseByName(name) {
    let token = AuthService.checkToken();

    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: token,
      },
    });
  }

  enroll(_id) {
    let token = AuthService.checkToken();

    return axios.post(
      API_URL + "/enroll/" + _id,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  // 拿到所有課程 title 清單
  getAllCourses() {
    let token = AuthService.checkToken();
    console.log("在 course-server");
    return axios.get(API_URL, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CourseService();
