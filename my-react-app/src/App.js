// App.js
import './style/app.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext, ThemeProvider } from './components/theme'; // Ensure correct import path

import Button from '@mui/material/Button';
import Counter from './components/counter';
import Deatels from './components/deatels';
import LifecycleDemo from './components/life';
import NewHeader from './components/newHeader';
import TableWithState from './components/table';

function App() {
  const [value, setValue] = useState();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div id='nav'>
          <ul className='divUl'>
            <li><ThemeToggleButton /></li>
            <li><Link className='navButton' to="/nav">nav</Link></li>
            <li><Link className='navButton' to="/class">class</Link></li>
            <li><Link className='navButton' to="/counter">counter</Link></li>
            <li><Link className='navButton' to="/table">table</Link></li>
            <li><Link className='navButton' to="/life">life</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/nav' element={<NewHeader />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/table' element={<TableWithState />} />
          <Route path='/details' element={<Deatels />} />
          <Route path='/life' element={<LifecycleDemo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Button onClick={toggleTheme}>
      Change to {theme === 'light' ? 'dark' : 'light'} theme
    </Button>
  );
};

export default App;