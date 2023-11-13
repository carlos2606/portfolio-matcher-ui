import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';


describe('SearchBar Component', () => {
  test('renders input and button', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByPlaceholderText('Enter keywords')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('calls onSearch with the input value when search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText('Enter keywords');
    fireEvent.change(input, { target: { value: 'logo design' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(mockOnSearch).toHaveBeenCalledWith('logo design');
  });
});

