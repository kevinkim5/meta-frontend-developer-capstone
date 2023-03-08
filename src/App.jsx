import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useFormContext } from "./context/FormContext";

import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Booking from "./screens/Booking";
import BookingConfirmation from "./screens/BookingConfirmation";
import Home from "./screens/Home";

export default function App() {
	const { formData } = useFormContext();

	return (
		<BrowserRouter>
			<Nav />
			<div className="main-page">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/reservations" element={<Booking />} />
					<Route
						path="/reservation-confirmation"
						element={<BookingConfirmation {...formData} />}
					/>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
