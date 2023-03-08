import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../utilities/mockApi";
import { useFormContext } from "../context/FormContext";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	contactNumber: 0,
	date: "",
	time: "",
	groupSize: 1,
	occasion: "",
	message: "",
};

const ACTION_TYPES = {
	FIRST_NAME: 0,
	LAST_NAME: 1,
	EMAIL: 2,
	DATE: 3,
	TIME: 4,
	GROUP_SIZE: 5,
	OCCASION: 6,
	MESSAGE: 7,
	CONTACT_NUM: 8,
};

function bookingFormReducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.FIRST_NAME:
			return {
				...state,
				firstName: action.payload,
			};
		case ACTION_TYPES.LAST_NAME:
			return {
				...state,
				lastName: action.payload,
			};
		case ACTION_TYPES.CONTACT_NUM:
			return {
				...state,
				contactNumber: action.payload,
			};
		case ACTION_TYPES.EMAIL:
			return {
				...state,
				email: action.payload,
			};
		case ACTION_TYPES.DATE:
			return {
				...state,
				date: action.payload,
			};
		case ACTION_TYPES.TIME:
			return {
				...state,
				time: action.payload,
			};
		case ACTION_TYPES.GROUP_SIZE:
			return {
				...state,
				groupSize: action.payload,
			};
		case ACTION_TYPES.OCCASION:
			return {
				...state,
				occasion: action.payload,
			};
		case ACTION_TYPES.MESSAGE:
			return {
				...state,
				message: action.payload,
			};
		default:
			return state;
	}
}

const useForm = () => {
	const [formData, dispatch] = useReducer(bookingFormReducer, initialState);
	const [timeSlots, setTimeslots] = useState(["Choose date first"]);
	const [isFormValid, setFormValid] = useState(false);
	const formContext = useFormContext();

	useEffect(() => {
		if (
			formData.email.includes("@") &&
			formData.email.includes(".") &&
			formData.date !== "" &&
			formData.time !== "" &&
			formData.groupSize
		) {
			setFormValid(true);
		}
	}, [formData]);

	const handleFirstNameChange = (e) => {
		dispatch({ type: ACTION_TYPES.FIRST_NAME, payload: e.target.value });
	};
	const handleLastNameChange = (e) => {
		dispatch({ type: ACTION_TYPES.LAST_NAME, payload: e.target.value });
	};

	const handleContactNumChange = (value) => {
		dispatch({ type: ACTION_TYPES.CONTACT_NUM, payload: value });
	};

	const handleEmailChange = (e) => {
		dispatch({ type: ACTION_TYPES.EMAIL, payload: e.target.value });
	};

	const handleDateChange = (value) => {
		dispatch({ type: ACTION_TYPES.DATE, payload: value });
		setTimeslots(fetchAPI(new Date(value)));
	};

	const handleTimeChange = (value) => {
		dispatch({ type: ACTION_TYPES.TIME, payload: value });
	};

	const handleGroupSizeChange = (value) => {
		dispatch({ type: ACTION_TYPES.GROUP_SIZE, payload: value });
	};

	const handleOccasionChange = (value) => {
		dispatch({ type: ACTION_TYPES.OCCASION, payload: value });
	};

	const handleMessageChange = (e) => {
		dispatch({ type: ACTION_TYPES.MESSAGE, payload: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let response;

		console.log(e);
		console.log(isFormValid);
		if (isFormValid) {
			response = submitAPI(formData);
			formContext.setFormData(formData);
		}
		return response ? true : false;
	};

	return {
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
	};
};

export default useForm;
