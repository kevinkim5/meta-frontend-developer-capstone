import React from "react";
import { Button, Card, Col, List, Row, Typography, Tabs } from "antd";
import { useNavigate } from "react-router-dom";

const { Paragraph, Title } = Typography;

export default function Home(props) {
	const navigate = useNavigate();

	const renderList = (dataSource) => {
		return (
			<List
				dataSource={dataSource}
				grid={{
					xs: 1,
					md: 1,
					lg: 2,
					xl: 2,
					xxl: 2,
				}}
				renderItem={(item) => (
					<List.Item>
						<Row>
							<Col xs={18} md={18} lg={18}>
								<Title level={4}>{item.title}</Title>
							</Col>
							<Col xs={6} md={6} lg={6}>
								<Title level={4}>${item.price}</Title>
							</Col>
						</Row>
						<Row>
							<Paragraph>{item.description}</Paragraph>
						</Row>
					</List.Item>
				)}
			/>
		);
	};

	const items = [
		{
			key: "1",
			label: `Appetisers`,
			children: renderList([
				{
					title: "Garlic Bread",
					price: 23,
					description: "Basil Pesto, Marinara, Gorgonzola Dolce",
				},
				{
					title: "Eggplant Parmigiana",
					price: 25,
					description: "Marinara, Mozzarella, Parmasan",
				},
				{
					title: "Tuna Tartare",
					price: 35,
					description:
						"Yellow Fin Tune, Avocado, Crispy Garlic, Black Olive Dressing",
				},
			]),
		},
		{
			key: "2",
			label: `Set Menu`,
			children: renderList([
				{
					title: "2-Course Set Lunch",
					price: 28,
				},
				{
					title: "3-Course Set Lunch",
					price: 38,
				},
			]),
		},
		{
			key: "3",
			label: `Pastas`,
			children: renderList([
				{
					title: "Carbonara",
					price: 38,
					description: "Prosciutto, Bacon, Onions, Cream Sauce",
				},
				{
					title: "Vongole",
					price: 43,
					description: "Garlic, Toasted Breadcrumbs, Pepperoncini",
				},
				{
					title: "Potato Gnocchi",
					price: 37,
					description: "Crema, Mushroom Ragu, Black Truffle",
				},
			]),
		},
		{
			key: "4",
			label: `Pizzas`,
			children: renderList([
				{
					title: "Margherita",
					price: 32,
					description: "Fresh Mozzarella, Tomato, Basil",
				},
				{
					title: "Black Truffle",
					price: 35,
					description: "Mix Mushroom, Ricotta, Arugula",
				},
				{
					title: "Carne",
					price: 37,
					description:
						"Salami, Prosciutto, Tomato, Pepperoncini, Gorgonzola, Fresh Mozzarella",
				},
			]),
		},
		{
			key: "5",
			label: `Sides`,
			children: renderList([
				{
					title: "French Fries",
					price: 18,
					description: "Truffle Oil, Black Pepper, Parmesan Cheese",
				},
				{
					title: "Grilled Asparagus",
					price: 18,
					description: "Lemon, Extra Virgin Olive Oil, Cracked Pepper",
				},
				{
					title: "Creamed Spinach",
					price: 18,
					description: "Butter, Fontina, Nutmeg",
				},
			]),
		},
		{
			key: "6",
			label: `Drinks`,
			children: renderList([
				{
					title: "Mojito",
					price: 25,
					description:
						"DON Q ANEJO RUM, KAFFIR LIME LEAVES, CALAMANSI, MINT, GULA MELAKA",
				},
				{
					title: "Proseco",
					price: 21,
					description: "VENETO, ITALY, NV",
				},
				{
					title: "Moscato",
					price: 28,
					description: "PIEDMONTE, ITALY 2018",
				},
			]),
		},
	];

	return (
		<div>
			<div className="main-1-wrapper">
				<div className="main-1-bg"></div>
				<Card className="main-1-card">
					<Title style={{ fontFamily: "'Markazi Text', sans-serif" }}>
						Little Lemon Restaurant
					</Title>
					<Paragraph style={{ fontFamily: "'Karla', sans-serif" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Paragraph>
					<Paragraph style={{ fontFamily: "'Karla', sans-serif" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Paragraph>
					<Button
						className="default-btn"
						style={{ marginRight: "16px" }}
						onClick={() => {
							window.scrollTo(0, window.innerHeight);
						}}
					>
						View Menu
					</Button>
					<Button
						className="default-btn"
						onClick={() => navigate("/reservations")}
					>
						Reserve a table
					</Button>
				</Card>
			</div>
			<div className="main-2-wrapper">
				<div className="main-2-bg"></div>
				<Card className="main-2-card">
					<Title>Our Menu</Title>
					<Tabs defaultActiveKey="1" items={items} />
				</Card>
			</div>
		</div>
	);
}
