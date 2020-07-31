import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Home />

    <GlobalStyles />
  </BrowserRouter>
);

export default App;
