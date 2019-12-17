// Test away!
import React from "react";
import { render, fireEvent, getByTestId, getByText} from "@testing-library/react";
import Display from "./Display.js";



test("checks if locked is displayed if property lock is true", () => {
    const {getByText} = render(<Display locked={true} />);
    getByText(/locked/i)
});

test("checks if open is displayed if property closed is false", () => {
    const {getByText} = render(<Display closed={false} />);
    getByText(/open/i)
});

test("Locked or closed uses the red-led class", () => {
    const {getByTestId} = render(<Display locked={true} closed={true}/>);
    const lockedProp = getByTestId("lock");
    const closedProp = getByTestId("door");
    expect(lockedProp.classList.contains("red-led")).toBe(true);
    expect(closedProp.classList.contains("red-led")).toBe(true);
});












