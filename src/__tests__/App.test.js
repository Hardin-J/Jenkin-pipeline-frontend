import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//Test Suite
describe('Two test',() => {
  //test case for rendering hello world
  it('renders Hello world', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders Welcome to Frontend', () => {
    render(<App />);
    const linkElement = screen.getByText("welcome to Frontend testing");
    expect(linkElement).toBeInTheDocument();
  });
});

it('renders Hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});