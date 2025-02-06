import React, { useState, useEffect } from "react";
import axios from "axios";

const Campgrounds = () => {
  const [campgrounds, setCampgrounds] = useState([]);
  const [error, setError] = useState(null);

  const fetchCampgrounds = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getCampground/");
      setCampgrounds(response.data);
    } catch (error) {
      console.error("Error fetching campgrounds:", error);
      setError("Error fetching campgrounds. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCampgrounds();
  }, []);

  return (
    <div>
      <h1>List of Campgrounds</h1>
      {error && <p>{error}</p>}
      {campgrounds.length === 0 && !error && <p>Loading campgrounds...</p>}
      {campgrounds.map((campground) => (
        <div key={campground._id}>
          <ul>
            <h2>{campground.title}</h2>
            <h3>{campground.price}</h3>
            <p>{campground.description}</p>
            <p>{campground.location}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Campgrounds;
