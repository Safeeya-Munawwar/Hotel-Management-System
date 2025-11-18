// NavbarWeather.jsx
import React, { useState, useEffect } from "react";

export default function WeatherWidget({ city = "Kandy,SL" }) {
  const [tempC, setTempC] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const API_KEY = "eeaa2d6d72cb678891e870945caab69f"; // Your key here

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&units=metric&appid=${API_KEY}`
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to fetch weather");
          setTempC(null);
        } else {
          setTempC(Math.round(data.main.temp));
        }
      } catch (err) {
        setError("Network error");
        setTempC(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    // Optional: refresh every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);

  if (loading) return <span>Loading…</span>;
  if (error) return <span>Weather unavailable</span>;

  return (
    <span className="flex items-center gap-1">
      ☁ {tempC}°C
    </span>
  );
}
