// Test away!
import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";


test("check that the initial default controls is open by having close gate displayed", () => {
    const {getByText} =render(<Controls />)
    getByText(/close gate/i)
})

test("check if buttons that toggle locked and closed are displayed", () => {
    const { getByTestId } = render (<Controls />);
     getByTestId(/ctrl-tgl-locked/i);
     getByTestId(/ctrl-tgl-close/i)
});

test("checks the closed toggle button is disabled if gate is locked", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLocked} />)
    const lockBtn = getByText("Lock Gate");
    fireEvent.click(lockBtn);
    {getByText}(/locked/i)
    expect(toggleLocked).not.toHaveBeenCalled()
})

test("checks the lock gate displays Locked on click", () => {
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLocked} />)
    const lockBtn = getByText("Lock Gate");
    fireEvent.click(lockBtn);
    {getByText}(/locked/i)
})

