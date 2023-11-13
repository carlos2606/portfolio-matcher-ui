import React from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioList.module.css';

function PortfolioList({ portfolios }) {
    return (
        <div className={styles.portfolioList}>
            {portfolios.map(portfolio => (
                <PortfolioItem key={portfolio.id} portfolio={portfolio} />
            ))}
        </div>
    );
}

export default PortfolioList;

