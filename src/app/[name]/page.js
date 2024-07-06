import React from "react";
import "../pages.style.css";

function page({ props }) {
  return (
    <div className="div-iteam">
      <h1>title</h1>
      <p>Desc</p>
      <div id="flag">
        <p>city</p>
        <img src="flag" alt="iamge" />
      </div>
      <p>xr7 lbrnamj</p>
      <div className="map"></div>
      <div className="div-list-details">
        <h3>mzaya |min7a|contara</h3>
        <ul>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
        </ul>
      </div>
      {/* <p>paragraph</p> */}
      <div className="div-list-details">
        <h3>m3ayer l9bol |min7a|contara</h3>
        <ul>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
          <li>c</li>
        </ul>
      </div>
      <div className="remarque">
        <h1>Remarque</h1>
        <p>detail remarque</p>
      </div>
      <p>last day to apply</p>
      <div className="urls">
        <h2>urls to apply :</h2>
        <button>dirct</button>
        <button>our team</button>
      </div>
    </div>
  );
}

export default page;
