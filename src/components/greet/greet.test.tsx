/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by a name.
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name="Irmantas"/>);
  const textElement = screen.getByText('Hello Irmantas');
  expect(textElement).toBeInTheDocument();
});
