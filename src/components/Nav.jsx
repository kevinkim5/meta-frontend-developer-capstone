import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faCartShopping,
	faHouse,
	faLemon,
	faList,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import littleLemonLogo from "../assets/Logo.svg";

export default function Nav(props) {
	const navigate = useNavigate();
	const items = [
		{
			key: "home",
			label: "Home",
			icon: <FontAwesomeIcon icon={faHouse} />,
		},
		{
			key: "#about-us",
			label: "About Us",
			icon: <FontAwesomeIcon icon={faLemon} />,
		},
		{
			key: "#menu",
			label: "Our Menu",
			icon: <FontAwesomeIcon icon={faList} />,
		},
		{
			key: "reservations",
			label: "Reservations",
			icon: <FontAwesomeIcon icon={faCalendar} />,
		},
		{
			key: "#order-online",
			label: "Order Online",
			icon: <FontAwesomeIcon icon={faCartShopping} />,
		},
	];

	const handleClick = (e) => {
		if (e.key.includes("#")) {
			navigate("/");
			if (e.key === "#menu") {
				setTimeout(() => {
					window.scrollTo(0, window.innerHeight);
				}, 150);
			}
		} else {
			if (e.key === "home") {
				navigate("/");
			} else {
				navigate(e.key);
			}
			console.log("nav");
		}
	};

	return (
		<div className="nav-bar">
			<Link to="/">
				<img src={littleLemonLogo} alt="Little Lemon Logo" />
			</Link>
			<Menu
				onClick={handleClick}
				items={items}
				mode="horizontal"
				style={{ width: "100%", justifyContent: "flex-end", border: "none" }}
			/>
		</div>
	);
}
