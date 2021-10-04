import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import fakeData from "../../data/fakedata.json";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(fakeData);
  }, []);
  // console.log(fakeData);
  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="text-warning">WELCOME</h1>
        <h1>To</h1>
        <h1>Our Music School</h1>
      </div>
      <div className="row">
        {courses.slice(0, 4).map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Home;
