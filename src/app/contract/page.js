"use client"
import React, { useState } from "react";
import "../pages.style.css";
import "../../components/components.style.css";
import Link from "next/link";

function page() {
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
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
        },
        {
          title: "hello",
          date: "12/12/2025",
          flag: "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Flag-of-Palestine.jpg",
          cover:
            "https://www.elmin7a.com/wp-content/uploads/2019/11/Masters-in-Finance-International-Excellence-Scholarships-768x448-1.jpg",
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
        <div>
          <h2 id="title-home">All Contract is Valide</h2>
          <div className="iteams-home">
            {data.map((iteam, index) => {
              return (
                <div className="card-home">
                  <img src={iteam.cover} alt="" />
                  <ul>
                    <img src={iteam.flag} alt="" />
                    <h4>{iteam.title}</h4>
                  </ul>
                  <p>
                    {iteam.date}
                    <span>
                      <button>View</button>
                      <button>Apply</button>
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <ul className="pages-blog">
            <li>1 list</li>
            <li>2 list</li>
            <li>3 list</li>
          </ul>
        </div>
      );
}

export default page;
