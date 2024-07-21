"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClientPage() {
  const [ids, setIds] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIdsFromApi();
  }, []);

  useEffect(() => {
    if (ids) {
      fetchData();
    }
  }, [ids]);

  const fetchIdsFromApi = async () => {
    try {
      const response = await axios.get('https://api-toturial-min7a.onrender.com/top3'); // Fetch IDs
      console.log('Fetched IDs:', response.data); // Log the fetched IDs for debugging
      setIds(response.data); // Store fetched IDs in state
    } catch (error) {
      console.error('Error fetching IDs:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-toturial-min7a.onrender.com/showBlog'); // Fetch blog data
      console.log('Fetched data:', response.data); // Log the fetched data for debugging
      setData(response.data); // Store fetched blog data in state
      setLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getItemById = (id) => {
    return data.find(item => item._id === id);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="div-top-3">
            {[ids.id1, ids.id2, ids.id3].map((id, index) => {
              const item = getItemById(id);
              if (item) {
                return (
                  <div className="card-top-3" key={index}>
                    <img src={item.cover} alt="cover" />
                    <div className="image-title-card-top-3">
                      <img src={item.countryImage} alt="flag" />
                      <h4>{item.name}</h4>
                    </div>
                    <p>
                      {item.date}
                      <span>
                        <button>View</button>
                        <button>Apply</button>
                      </span>
                    </p>
                  </div>
                );
              } else {
                return null; // Handle cases where item is not found (optional)
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientPage;
