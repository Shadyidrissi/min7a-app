"use client";
import React, { useState } from "react";
import "./components.style.css";

function LastThree() {
  const [data, setData] = useState([
    {
      title: "hello",
      date: "12/12/2025",
      flag: "https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg",
      cover:
        "https://workstudyvisa.com/wp-content/uploads/2021/10/scholarships-in-canada-for-african-students-1-1024x580-1.jpg",
    },
    {
      title: "hello",
      date: "12/12/2025",
      flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
      cover:
        "https://pbs.twimg.com/media/CNblTOwUsAA-3Ub?format=jpg&name=large",
    },
    {
      title: "hello",
      date: "12/12/2025",
      flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
      cover:
        "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
    },
  ]);

  return (
    <div className="div-top-3">
      {data.map((item, index) => {
        return (
          <div className="card-top-3" key={index}>
            <img src={item.cover} alt="cover" />
            <ul className="image-title-card-top-3">
              <img src={item.flag} alt="flag" />
              <h4>{item.title}</h4>
            </ul>
            <p>{item.date}<span><button>Apply</button></span></p>
          </div>
        );
      })}
    </div>
  );
}

export default LastThree;
