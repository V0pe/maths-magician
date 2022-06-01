import React from "react";
import Calculator from "../Calculator";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('result render 0 initailly', () => {
    const  { getByTestId }= render(<Calculator />);
    // const no1 = component.getByTestId('no-1');
    let result = getByTestId('result');

    expect(result.textContent).toBe('0');
})

test('1 button renders with 1 in result area', () => {
    const  { getByTestId }= render(<Calculator />);
    // const no1 = component.getByTestId('no-1');
    let result = getByTestId('result');

    expect(result.textContent).toBe('0');
})