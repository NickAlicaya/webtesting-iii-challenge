import React from "react"
import { render, fireEvent, getByTestId, getByText } from "@testing-library/react";
import Dashboard from './Dashboard';

// Test away
test("checks that controls and displays are rendered", () => {
    const {getByText} = render(< Dashboard/>);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/lock gate/i);

 });

