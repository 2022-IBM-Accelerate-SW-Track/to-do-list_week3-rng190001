import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByRole('textbox', {name: /Due Date/i});
  const clickButton = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/22/2022";
  fireEvent.change(inputTask, {target: {value: "Project 3 Due"}});
  fireEvent.change(inputDate, {target: {value: dueDate}});
  fireEvent.click(clickButton);
  fireEvent.change(inputTask, {target: {value: "Project 3 Due"}});
  fireEvent.change(inputDate, {target: {value: dueDate}});
  fireEvent.click(clickButton);
  const check = screen.getAllByText(/Project/i);
  expect(check.length).toBe(1);
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  //const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByRole('textbox', {name: /Due Date/i});
  const clickButton = screen.getByRole('button', {name: /Add/i});
  const dueDate = "07/22/2022";
  //fireEvent.change(inputTask, {target: {value: null}})
  fireEvent.change(inputDate, {target: {value: dueDate}});
  fireEvent.click(clickButton);
  const check = screen.getByText(/You have no todo's left/i);;
  expect(check).toBeInTheDocument;
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const clickButton = screen.getByRole('button', {name: /Add/i});
  fireEvent.change(inputTask, {target: {value: "Project 3 Due"}});
  fireEvent.click(clickButton);
  const check = screen.getByText(/You have no todo's left/i);;
  expect(check).toBeInTheDocument();
 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByRole('textbox', {name: /Due Date/i});
  const clickButton = screen.getByRole('button', {name: /Add/i});
  const dueDate = "07/22/2022";
  fireEvent.change(inputTask, {target: {value: "Project 3 Due"}});
  fireEvent.change(inputDate, {target: {value: dueDate}});
  fireEvent.click(clickButton);
  const checkIfBox = screen.getByRole('checkbox');
  fireEvent.click(checkIfBox);
  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByRole('textbox', {name: /Due Date/i});
  const clickButton = screen.getByRole('button', {name: /Add/i});
  const dueDate = "05/22/2022";
  fireEvent.change(inputTask, {target: {value: "Project 3 Due"}});
  fireEvent.change(inputDate, {target: {value: dueDate}});
  fireEvent.click(clickButton);
  const pastDueCheck = screen.getByTestId(/Project 3 Due/i);
  //'background:#ff6961'
  //'background:#01e0b2'
  expect(pastDueCheck).toHaveStyle('background:#ff6961');
 });
