import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import { addBall, addStrike, addFoul, addHit } from './components/Dashboard';



test('addBall adds 1 ball, and resets when it reaches 4 balls', () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(2)).toBe(3);
  expect(addBall(4)).toBe(0);
});

test('addStrike adds 1 strike, and resets when it reaches 3 strikes', () => {
  expect(addStrike(1)).toBe(2);
  expect(addStrike(0)).toBe(1);
  expect(addStrike(3)).toBe(0);
});

test('addFoul adds 1 foul', () => {
  expect(addFoul(0)).toBe(1);
  expect(addFoul(2)).toBe(3);
});

test('addHit adds 1 hit', () => {
  expect(addHit(0)).toBe(1);
  expect(addHit(1)).toBe(2);
});


it('App loads with an initial balls/strikes state of 0', () => {
  const { container } = render(<App />);
  const ballsValue = getByTestId(container, 'ballsvalue');
  const strikesValue = getByTestId(container, 'strikesvalue');

  expect(ballsValue.textContent).toBe('0');
  expect(strikesValue.textContent).toBe('0');
});

it('Ball button adds one ball and resets when it reaches 4', () => {
  const { container } = render(<App />);
  const ballsValue = getByTestId(container, 'ballsvalue');
  const ballBtn = getByTestId(container, 'ballbtn');  

  expect(ballsValue.textContent).toBe('0');

  fireEvent.click(ballBtn);
  expect(ballsValue.textContent).toBe('1');

  fireEvent.click(ballBtn);
  expect(ballsValue.textContent).toBe('2');

  fireEvent.click(ballBtn);
  expect(ballsValue.textContent).toBe('3');

  fireEvent.click(ballBtn);
  expect(ballsValue.textContent).toBe('0');
});

it('Strike button adds one strike and resets when it reaches 3', () => {
  const { container } = render(<App />);
  const strikesValue = getByTestId(container, 'strikesvalue');
  const strikeBtn = getByTestId(container, 'strikebtn');

  expect(strikesValue.textContent).toBe('0');

  fireEvent.click(strikeBtn);
  expect(strikesValue.textContent).toBe('1');

  fireEvent.click(strikeBtn);
  fireEvent.click(strikeBtn);
  expect(strikesValue.textContent).toBe('0');
});

it('Foul button increases strikes up to 2', () => {
  const { container } = render(<App />);
  const strikesValue = getByTestId(container, 'strikesvalue');
  const foulBtn = getByTestId(container, 'foulbtn');

  expect(strikesValue.textContent).toBe('0');

  fireEvent.click(foulBtn);
  expect(strikesValue.textContent).toBe('1');

  fireEvent.click(foulBtn);
  expect(strikesValue.textContent).toBe('2');

  fireEvent.click(foulBtn);
  fireEvent.click(foulBtn);
  expect(strikesValue.textContent).toBe('2');
});

it('Hit button resets balls and strikes to 0', () => {
  const { container } = render(<App />);
  const ballsValue = getByTestId(container, 'ballsvalue');
  const ballBtn = getByTestId(container, 'ballbtn');  
  const strikesValue = getByTestId(container, 'strikesvalue');
  const strikeBtn = getByTestId(container, 'strikebtn');
  const hitBtn = getByTestId(container, 'hitbtn');

  fireEvent.click(ballBtn);
  expect(ballsValue.textContent).toBe('1');

  fireEvent.click(strikeBtn);
  expect(strikesValue.textContent).toBe('1');

  fireEvent.click(hitBtn);
  expect(ballsValue.textContent).toBe('0');
  expect(strikesValue.textContent).toBe('0');

});