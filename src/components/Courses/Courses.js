import React from "react";
import "./Course.css";

const Courses = (props) => {
  const { courseName, img, CourseDuration, courseFee } = props.course;
  return (
    <div className="col-md-6 p-2 mt-5">
      <div className="card course-card">
        <img src={img} className="card-img-top course-image" alt="..." />
        <div className="card-body text-start">
          <h2 className="card-title text-warning">{courseName}</h2>
          <p className="card-text">
            <strong>Course Duration:</strong> {CourseDuration}
          </p>
          <h5>Course Fee: {courseFee}$</h5>
          <button className="btn btn-danger">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
