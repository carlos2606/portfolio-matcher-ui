const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const API_ROUTES = {
  SEARCH: `${API_BASE_URL}/api/search`,
  GET_PORTFOLIOS: `${API_BASE_URL}/api/portfolios`,
  GET_PORTFOLIO: (id) => `${API_BASE_URL}/api/portfolios/${id}`,
  CREATE_PORTFOLIO: `${API_BASE_URL}/api/portfolios`,
  UPDATE_PORTFOLIO: (id) => `${API_BASE_URL}/api/portfolios/${id}`,
  DELETE_PORTFOLIO: (id) => `${API_BASE_URL}/api/portfolios/${id}`,
};
