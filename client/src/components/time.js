import { useState, useEffect } from "react";
import React from "react";
import './time.css';

function Time() {
  const [ctime, setTime] = useState(new Date().toLocaleTimeString());
  const [cday, setDay] = useState(formatDate(new Date()));
  const [dayName, setDayName] = useState(formatDayName(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDay(formatDate(now));
      setDayName(formatDayName(now));
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function formatDayName(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  return (
    <div id="container">
      <div id="element">{ctime}</div>
      <div id="element">{cday}</div>
      <div id="element">{dayName}</div>
    </div>
  );
}

export default Time;
