"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "../pages.style.css";

function Page() {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api-toturial-min7a.onrender.com/showBlog");
        const result = await response.json();

        // Assuming the API returns an array of blog objects
        const matchingData = result.find((item) => item._id === name);
        
        if (matchingData) {
          setData(matchingData);
        } else {
          setData(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  if (loading) {
    return <p style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", color: "blue", fontWeight: "800", fontSize: '44px' }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", color: "red", fontWeight: "800", fontSize: '44px' }}>Error fetching data: {error.message}</p>;
  }

  if (!data) {
    return <p style={{ height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center", color: "red", fontWeight: "800", fontSize: '44px' }}>No data found for the name: {name}</p>;
  }

  // Convert comma-separated strings into lists
  const extentionList = data.extention ? data.extention.split(',').map(item => item.trim()) : [];
  const acceptenceList = data.acceptence ? data.acceptence.split(',').map(item => item.trim()) : [];

  return (
    <div className="div-iteam">
      <h1>{data.name}</h1>
      <img id="image-cover" src={data.cover} alt="" />
      <div id="flag">
        <p>{data.city}</p>
        <img style={{objectFit:"cover"}} src={data.countryImage} alt="Flag" />
      </div>
      <p><span style={{fontSize:"22px",fontWeight:"700"}}>Description : </span>{data.description}</p>
      <p><span style={{fontSize:"22px",fontWeight:"700"}}>Details : </span>{data.detail}</p>
      {/* <div className="map"></div> */}
      <div className="div-list-details">
        <h3 id="title-items">Extensions</h3>
        <ul id="list-items">
          {extentionList.length > 0 ? (
            extentionList.map((item, index) => (
              <li id="list-item" key={index}>{item}</li>
            ))
          ) : (
            <li>No extensions available.</li>
          )}
        </ul>
      </div>
      <div className="div-list-details">
        <h3 id="title-items">Acceptances</h3>
        <ul id="list-items">
          {acceptenceList.length > 0 ? (
            acceptenceList.map((item, index) => (
              <li id="list-item" key={index}>{item}</li>
            ))
          ) : (
            <li>No acceptances available.</li>
          )}
        </ul>
      </div>
      <div className="remarque">
        <h1>Remarque</h1>
        <p>{data.remarque}</p>
      </div>
      <p>Last day to apply: {data.lastDay}</p>
      <div className="urls">
        <h2>URLs to apply:</h2>
        <button onClick={() => window.location.href = data.directUrl}>Direct</button>
        <button onClick={() => window.location.href = data.teamUrl}>Our Team</button>
      </div>
    </div>
  );
}

export default Page;
