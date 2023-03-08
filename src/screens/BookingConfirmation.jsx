import React, { useEffect } from "react";
import { Card, Col, Button, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function BookingConfirmation(props) {
	const navigate = useNavigate();
	const details = [
		{
			key: "date",
			label: "Date",
		},
		{
			key: "time",
			label: "Time",
		},
		{
			key: "groupSize",
			label: "Group Size",
		},
		{
			key: "occasion",
			label: "Occasion",
		},
		{
			key: "message",
			label: "Special Request",
		},
	];
	console.log(props);
	useEffect(() => {
		if (props.firstName === "") {
			navigate("/");
		}
	}, []);

	return (
		<div>
			<div className="confirmation-bg"></div>
			<div className="confirmation-wrapper">
				<Card className="confirmation-card">
					<Title level={2}>Booking Confirmed!</Title>
					<Title level={3}>
						Thank you for your reservation, {props.firstName}!
					</Title>
					<Title level={4}>Reservation Details</Title>
					{details.map((detail) => {
						return (
							<Row>
								<Col xs={6} md={6} lg={4} xl={4} xxl={4}>
									{detail.label}:
								</Col>
								<Col xs={18} md={18} lg={18} xl={18} xxl={18}>
									{props[detail.key]}
								</Col>
							</Row>
						);
					})}
					<Button
						className="default-btn"
						style={{ marginTop: "20px" }}
						onClick={() => navigate("/")}
					>
						Return Home
					</Button>
				</Card>
			</div>
		</div>
	);
}
