import React, { useContext, useState } from "react";

const FormContext = React.createContext({
	formData: {
		firstName: "",
		lastName: "",
		email: "",
		date: "",
		time: "",
		groupSize: 1,
		occasion: false,
		message: false,
	},
	setFormData: () => {},
});

const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		date: "",
		time: "",
		groupSize: 1,
		occasion: false,
		message: false,
	});

	const handleFormData = (data) => setFormData(data);

	return (
		<FormContext.Provider value={{ formData, setFormData: handleFormData }}>
			{children}
		</FormContext.Provider>
	);
};

const useFormContext = () => useContext(FormContext);

export { FormProvider, useFormContext };
