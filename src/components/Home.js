"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './components.style.css';

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-toturial-min7a.onrender.com/showBlog'); // Adjust URL as per your server setup
      const filteredData = response.data.filter(item => !item.hidden); // Filter out hidden items
      const sortedData = filteredData.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending
      setData(sortedData);
      generatePages(sortedData.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const generatePages = (totalItems) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pagesArray = [];
    for (let i = 1; i <= pageCount; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
    return formattedDate;
  };

  return (
    <div>
      <h2 id="title-home">All MIna7 are Valide</h2>
      <div className="iteams-home">
        {data
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
            <div className="card-home" key={index}>
              <img src={item.cover} alt="" />
              <ul>
                <img src={item.countryImage} alt="" />
                <h4>{item.name}</h4>
              </ul>
              <p>
                {formatDateTime(item.date)}
                <span>
                  <button>View</button>
                  <button>Apply</button>
                </span>
              </p>
            </div>
          ))}
      </div>
      <div className="pages-blog">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
