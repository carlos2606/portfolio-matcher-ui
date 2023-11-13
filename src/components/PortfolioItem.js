import React from 'react';
import styles from './PortfolioItem.module.css';

function PortfolioItem({ portfolio }) {
    return (
        <div className={styles.portfolioItem}>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
            {portfolio.image_url && (
                <img 
                    src={portfolio.image_url} 
                    alt={`${portfolio.title} Thumbnail`} 
                    className={styles.portfolioImage}
                />
            )}
            <div className={styles.keywords}>
                <strong>Keywords:</strong> {portfolio.keywords}
            </div>
        </div>
    );
}

export default PortfolioItem;
