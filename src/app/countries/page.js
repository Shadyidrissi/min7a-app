"use client";
import React, { useEffect, useState } from "react";
import "../pages.style.css";
import "../../components/components.style.css";
import Link from "next/link";

function Page() {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api-toturial-min7a.onrender.com/showBlog")
      .then((response) => response.json())
      .then((data) => {
        // Filter out hidden items
        const visibleData = data.filter(item => !item.hidden);

        // Store the fetched data
        setData(visibleData);

        // Extract unique countries with their images and types
        const uniqueCountries = [];
        const countrySet = new Set();
        visibleData.forEach((blog) => {
          if (!countrySet.has(blog.countryName)) {
            countrySet.add(blog.countryName);
            uniqueCountries.push({
              name: blog.countryName,
              image: blog.countryImage,
              type: blog.type,
            }); // Assuming each blog object has an image and type property
          }
        });
        setCountries(uniqueCountries);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter data based on selected type and country
    let filtered = data;
    if (filterType !== "all") {
      filtered = filtered.filter((blog) => blog.type === filterType); 
    }
    if (selectedCountry !== "") {
      filtered = filtered.filter(
        (blog) => blog.countryName === selectedCountry
      );
    }
    // Sort the filtered data by date in descending order
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredData(filtered);
  }, [filterType, selectedCountry, data]);

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = `${("0" + (date.getMonth() + 1)).slice(-2)}/${(
      "0" + date.getDate()
    ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(
      -2
    )}:${("0" + date.getMinutes()).slice(-2)}`;
    return formattedDate;
  };

  return (
    <>
      <header className="header-countries">
        <h2 id="title-header">Countries</h2>
        <select id="country-option" onChange={handleFilterTypeChange}>
          <option value="all">All</option>
          <option value="min7a">min7a</option>
          <option value="contract">contract</option>
        </select>
        <select id="country-option" onChange={handleCountryChange}>
          <option value="">Select a Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <ul className="section-countries">
          {countries.map((country, index) => (
            <button
              key={index}
              onClick={() => setSelectedCountry(country.name)}
            >
              <img style={{objectFit:"cover"}} src={country.image} alt={country.name} name={country.name} />
            </button>
          ))}
        </ul>
      </header>
      <div className="body-div">
        <div className="iteams-home">
          {filteredData.map((blog, index) => (
            <div className="card-home" key={index}>
              <img src={blog.cover} alt="" />
              <ul>
                <img style={{objectFit:"cover"}} src={blog.countryImage} alt="" />
                <h4>{blog.name}</h4>
              </ul>
              <p>
                {formatDateTime(blog.date)}
                <span>
                <button><a href={`/${blog._id}`}>View</a></button>
                  <button>Apply</button>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
