import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioItem from './PortfolioItem';
import '@testing-library/jest-dom';


describe('PortfolioItem Component', () => {
    const mockPortfolio = {
        id: '1',
        title: 'Sample Portfolio',
        description: 'A brief description of the portfolio.'
    };

    test('renders portfolio title and description', () => {
        render(<PortfolioItem portfolio={mockPortfolio} />);
        expect(screen.getByText('Sample Portfolio')).toBeInTheDocument();
        expect(screen.getByText('A brief description of the portfolio.')).toBeInTheDocument();
    });
});

