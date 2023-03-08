import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faCakeCandles,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
	Button,
	Card,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Select,
	Typography,
} from "antd";
import useForm from "../hooks/useBookingForm";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function Booking(props) {
	const navigate = useNavigate();
	const {
		formData,
		timeSlots,
		isFormValid,
		handleFirstNameChange,
		handleLastNameChange,
		handleEmailChange,
		handleContactNumChange,
		handleDateChange,
		handleTimeChange,
		handleGroupSizeChange,
		handleOccasionChange,
		handleMessageChange,
		handleSubmit,
	} = useForm();
	console.log(timeSlots);

	const onFinish = (values) => {
		console.log("Success:", values);
		navigate("/reservation-confirmation");
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
			<div className="booking-form-bg"></div>
			<div className="booking-form-wrapper">
				<Card className="booking-form-card">
					<Title level={3} className="booking-form-title">
						Reservation Details
					</Title>
					<Form
						name="basic"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
						style={{ width: "100%", paddingLeft: "20%", paddingRight: "20%" }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Date"
							rules={[{ required: true, message: "Please select a date!" }]}
						>
							<DatePicker
								onChange={(date, dateString) => {
									handleDateChange(dateString);
								}}
								style={{ width: "100%" }}
							/>
						</Form.Item>
						<Form.Item
							label="Time"
							rules={[{ required: true, message: "Please select a time!" }]}
						>
							<Select onChange={handleTimeChange} value={formData.time}>
								{timeSlots.length &&
									timeSlots[0] !== "Choose date first" &&
									timeSlots.map((slot) => {
										return <Select.Option value={slot}>{slot}</Select.Option>;
									})}
							</Select>
						</Form.Item>
						<Form.Item label="Group Size">
							<InputNumber
								min={1}
								max={10}
								onChange={handleGroupSizeChange}
								value={formData.groupSize}
								style={{ width: "100%" }}
							/>
						</Form.Item>
						<Form.Item label="Occasion">
							<Select onChange={handleOccasionChange} value={formData.occasion}>
								<Select.Option value="birthday">
									<FontAwesomeIcon icon={faCakeCandles} /> Birthday
								</Select.Option>
								<Select.Option value="anniversary">
									<FontAwesomeIcon icon={faHeart} /> Anniversary
								</Select.Option>
								<Select.Option value="business">
									<FontAwesomeIcon icon={faBriefcase} /> Business
								</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							label="First Name"
							name="firstname"
							rules={[
								{ required: true, message: "Please input your first name!" },
							]}
						>
							<Input
								onChange={handleFirstNameChange}
								value={formData.firstName}
							/>
						</Form.Item>
						<Form.Item
							label="Last Name"
							name="last-name"
							rules={[
								{ required: true, message: "Please input your last name!" },
							]}
						>
							<Input
								onChange={handleLastNameChange}
								value={formData.lastName}
							/>
						</Form.Item>
						<Form.Item
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message: "Please input a valid email!",
									type: "email",
								},
							]}
						>
							<Input onChange={handleEmailChange} value={formData.email} />
						</Form.Item>
						<Form.Item
							label="Contact Number"
							name="contact-number"
							rules={[
								{
									required: true,
									message: "Please input your contact number!",
								},
							]}
						>
							<InputNumber
								min={1}
								onChange={handleContactNumChange}
								value={formData.contactNumber}
								style={{ width: "100%" }}
							/>
						</Form.Item>
						<Form.Item label="Special Request" name="special-request">
							<Input.TextArea
								onChange={handleMessageChange}
								rows={4}
								value={formData.message}
							/>
						</Form.Item>
						<Form.Item wrapperCol={{ offset: 10, span: 16 }}>
							<Button
								style={{ backgroundColor: "#F4CE14" }}
								onClick={(e) => {
									let res = handleSubmit(e);
									if (res) {
										onFinish();
									}
								}}
							>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</div>
	);
}
