import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should increment a counter", () => {
	render(<App />);

	const btn = screen.getByRole("button");

	userEvent.click(btn);
	userEvent.click(btn);

	expect(btn.textContent).toMatch("2");
});
