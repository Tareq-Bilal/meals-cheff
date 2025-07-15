import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "./Navbar";
import MealesList from "./MealesList";
import { meals } from "../mealsData";
import Footer from "./Footer";
import MealDetails from "./MealDetails";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Swal from "sweetalert2";
import NewMeal from "./NewMeal";
const Home = () => {
  const [allMeals, setAllMeals] = useState(meals);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (totalOrders >= 1) {
      Swal.fire({
        title: "Ordered Successfully",
        icon: "success",
        draggable: false,
      });
    }
  }, [totalOrders]);

  const handleOrderClick = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
    setTotalOrders((prevTotalOrders) => prevTotalOrders + 1);
  };

  const handleIncrementOrderClick = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(price));
    setTotalOrders((prevTotalOrders) => prevTotalOrders + 1);
  };

  const handleDecrementOrderClick = (price) => {
    // Ensure price is a positive number
    const safePrice = parseInt(price) || 0;

    // Prevent decreasing if totalPrice or totalOrders would go below zero
    setTotalPrice((prevTotalPrice) => {
      const newPrice = prevTotalPrice - safePrice;
      return newPrice < 0 ? 0 : newPrice;
    });

    setTotalOrders((prevTotalOrders) => {
      const newOrderCount = prevTotalOrders - 1;
      return newOrderCount < 0 ? 0 : newOrderCount;
    });
  };

  return (
    <div>
      <NavBar totalOrders={totalOrders} totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<MealesList meals={allMeals} />} />
        <Route
          path="/mealDetails/:mealTitle"
          element={
            <MealDetails
              handleIncrementOrderClick={handleIncrementOrderClick}
              handleDecrementOrderClick={handleDecrementOrderClick}
            />
          }
        />
        <Route path="/AddNewMeal" element={<NewMeal></NewMeal>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
