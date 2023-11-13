import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PortfolioList from './components/PortfolioList';
import { API_ROUTES } from './api/apiRoutes'; // Ensure you have this configuration

function App() {
    const [portfolios, setPortfolios] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`${API_ROUTES.SEARCH}?searchQuery=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setPortfolios(data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <PortfolioList portfolios={portfolios} />
        </div>
    );
}

export default App;
