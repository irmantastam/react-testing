/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by a name.
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
  test('Renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  test('Renders a name', () => {
    render(<Greet name="Irmantas"/>);
    const textElement = screen.getByText('Hello Irmantas');
    expect(textElement).toBeInTheDocument();
  });
});
