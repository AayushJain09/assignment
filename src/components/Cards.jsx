// Cards.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from './Card.jsx';
import Grid from '@mui/material/Grid';

export default function Cards() {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, [page]); // Fetch new jobs whenever the page number changes

  const fetchJobs = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 6,
            "offset": (page - 1) * 6
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();

        if (data && Array.isArray(data.jdList)) {
            setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
        } else {
            console.error('Invalid data format:', data);
        }
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
};


  // Intersection Observer logic for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1); // Load more jobs when bottom is reached
      }
    }, { threshold: 1 });

    observer.observe(document.querySelector('#sentinel'));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {jobs.map((job, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card job={job} />
          </Grid>
        ))}
        <Grid item xs={12} id="sentinel"></Grid> {/* Sentinel element for Intersection Observer */}
      </Grid>
    </Box>
  );
}
