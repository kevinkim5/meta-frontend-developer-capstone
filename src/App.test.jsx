import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
	test("renders page title", () => {
		render(<App />);
		const title = screen.getByText(/little lemon restaurant/i);
		expect(title).toBeInTheDocument();
	});

	test("renders view menu button", () => {
		render(<App />);
		const menuBtn = screen.getByRole("button", {
			name: /view menu/i,
		});
		expect(menuBtn).toBeInTheDocument();
	});

	test("renders book table button", () => {
		render(<App />);
		const menuBtn = screen.getByRole("button", {
			name: /reserve a table/i,
		});
		expect(menuBtn).toBeInTheDocument();
	});
});
