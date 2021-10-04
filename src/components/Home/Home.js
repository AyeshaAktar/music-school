import React, { useEffect, useState } from "react";

const Home = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
