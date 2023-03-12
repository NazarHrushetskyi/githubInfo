import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound//NotFound.jsx';
import Home from './pages/Home/Home';

import './scss/app.scss';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
const PATHS = {
  layout: '/',
  home:'',
  info:'user/:id',
  notfound: '*'
}
  return (
    <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Routes>
        <Route path={PATHS.layout} element={<MainLayout />}>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.info} element={<Info />} />
          <Route path={PATHS.notfound} element={<NotFound />} />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;
