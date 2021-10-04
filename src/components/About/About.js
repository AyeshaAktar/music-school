import React from "react";
import "./About.css";
import teacher1 from "../../image/teacher-1.jpg";
import teacher2 from "../../image/teacher-2.jpg";
import teacher3 from "../../image/teacher-3.jpg";

const About = () => {
  return (
    <div className="contyainer m-5">
      <h2>About us</h2>
      <p className="mt-5 text-secondary">
        Our professional approach and continual development has led us to
        becoming the leading provider of professional music education. We
        combine innovative, fun and creative ways to teach music and engage with
        students to reach their full potential. Innovative music lessons and
        classes from beginner through advanced for children, teens, and adults.
        We are the best music school for you. We have programs to suit
        everyone’s needs.
        <br />
        We are the only professional music school offering lessons for children,
        adults and seniors.
      </p>

      <div className="m-5">
        <h2>Teachers</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={teacher1}
                  className="card-img-top rounded-circle teacher-image"
                  alt="..."
                />
              </div>

              <h5 className="">Terry Barton</h5>
            </div>
          </div>
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={teacher2}
                  className="card-img-top rounded-circle teacher-image"
                  alt="..."
                />
              </div>

              <h5 className="">Nayeem</h5>
            </div>
          </div>
          <div className="col">
            <div className=" border-0">
              <div className="d-flex justify-content-center">
                <img
                  src={teacher3}
                  className="card-img-top rounded-circle teacher-image"
                  alt="..."
                />
              </div>

              <h5 className="">Rony</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
