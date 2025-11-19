import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DiningPage from "./pages/Dining";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";
import ReservationPage from "./pages/reservation/ReservationPage";

import HotelDetail from "./pages/HotelDetail";
import Booking from "./pages/Booking";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/restaurants/:slug" element={<RestaurantDetails />} />
        <Route path="/reservation/:slug" element={<ReservationPage />} />
          <Route path="/hotel-detail" element={<HotelDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
