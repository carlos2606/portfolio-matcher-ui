import React from 'react';
import { render, screen } from '@testing-library/react';
import PortfolioList from './PortfolioList';
import '@testing-library/jest-dom';

describe('PortfolioList Component', () => {
    const mockPortfolios = [
        { id: '1', title: 'First Portfolio', description: 'Description of the first portfolio.' },
        { id: '2', title: 'Second Portfolio', description: 'Description of the second portfolio.' }
    ];

    test('renders a list of portfolio items', () => {
        render(<PortfolioList portfolios={mockPortfolios} />);
        mockPortfolios.forEach(portfolio => {
            expect(screen.getByText(portfolio.title)).toBeInTheDocument();
            expect(screen.getByText(portfolio.description)).toBeInTheDocument();
        });
    });
});
