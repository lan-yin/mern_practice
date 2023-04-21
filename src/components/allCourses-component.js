import React, { useState } from "react";
import CourseService from "../services/course.service";

const AllCoursesComponen = ({ currentUser, setCurrentUser }) => {
  let [currentCourses, setCurrentCourses] = useState(null);

  const searchAllCourses = () => {
    setCurrentCourses(
      CourseService.getAllCourses()
        .then((data) => {
            console.log(data.data);
          setCurrentUser(data.data);
        })
        .catch((e) => {
          console.log(e);
        })
    );
  };

  return (
    <div>
      {!currentUser && (
        <button
          onClick={searchAllCourses}
          className="btn btn-primary btn-block"
        >
          <span>查詢所有課程</span>
        </button>
      )}
      {currentUser &&
        currentUser.map((course) => (
          <div key={course._id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">課程名稱：{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <p>授課老師：{ course.instructor.username}</p>
              <p>價格: {course.price}</p>
              <p>目前的學生人數: {course.students.length}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllCoursesComponen;
