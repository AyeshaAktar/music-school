import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import fakeData from "../../data/fakedata.json";

const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(fakeData);
  }, []);
  return (
    <div className="container">
      <div className="row">
        {courses.map((course) => (
          <Courses course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Services;
