import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Calculator from '../Calculator';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(() => {
  cleanup();
});

test('result render 0 initailly', () => {
  const { getByTestId } = render(<Calculator />);
  const result = getByTestId('result');

  expect(result.textContent).toBe('0');
});

test('1234567890 button renders with 1 in result area', () => {
  const { getByTestId } = render(<Calculator />);
  const no1 = getByTestId('no-1');
  const result = getByTestId('result');
  const no2 = getByTestId('no-2');
  const no3 = getByTestId('no-3');
  const no4 = getByTestId('no-4');
  const no5 = getByTestId('no-5');
  const no6 = getByTestId('no-6');
  const no7 = getByTestId('no-7');
  const no8 = getByTestId('no-8');
  const no9 = getByTestId('no-9');
  const no0 = getByTestId('0');

  fireEvent.click(no1);
  fireEvent.click(no2);
  fireEvent.click(no3);
  fireEvent.click(no4);
  fireEvent.click(no5);
  fireEvent.click(no6);
  fireEvent.click(no7);
  fireEvent.click(no8);
  fireEvent.click(no9);
  fireEvent.click(no0);

  expect(result.textContent).toBe('1234567890');
});

test('+ button rendered inbetween number in result area', () => {
  const { getByTestId } = render(<Calculator />);
  const no1 = getByTestId('no-1');
  const result = getByTestId('result');
  const no2 = getByTestId('no-2');
  const no3 = getByTestId('no-3');
  const add = getByTestId('+');

  fireEvent.click(no1);
  fireEvent.click(no2);
  fireEvent.click(add);
  fireEvent.click(no3);

  expect(result.textContent).toBe('12+3');
});

test('last operation button rendered', () => {
  const { getByTestId } = render(<Calculator />);
  const no1 = getByTestId('no-1');
  const result = getByTestId('result');
  const substract = getByTestId('-');
  const divide = getByTestId('/');
  const multiply = getByTestId('X');

  fireEvent.click(no1);
  fireEvent.click(substract);
  fireEvent.click(divide);
  fireEvent.click(multiply);

  expect(result.textContent).toBe('1x');
});

test('AC button rendered with clean slate', () => {
  const { getByTestId } = render(<Calculator />);
  const no1 = getByTestId('no-1');
  const result = getByTestId('result');
  const substract = getByTestId('-');
  const divide = getByTestId('/');
  const percent = getByTestId('%');
  const AC = getByTestId('AC');

  fireEvent.click(no1);
  fireEvent.click(substract);
  fireEvent.click(divide);
  fireEvent.click(percent);
  fireEvent.click(AC);

  expect(result.textContent).toBe('');

  fireEvent.click(no1);
  fireEvent.click(substract);
  fireEvent.click(no1);

  expect(result.textContent).toBe('1-1');
});

test('match snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('1 divide 1 should be 1', () => {
    const { getByTestId } = render(<Calculator />);
    const no1 = getByTestId('no-1');
    const result = getByTestId('result');
    const substract = getByTestId('-');
    const divide = getByTestId('/');
    const equal = getByTestId('=');
    const AC = getByTestId('AC');
  
    fireEvent.click(no1);
    fireEvent.click(divide);
    fireEvent.click(no1);
    fireEvent.click(equal);
  
    expect(result.textContent).toBe('1');
  });