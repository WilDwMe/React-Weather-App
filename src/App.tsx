import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStat } from './pages/MonthStat/MonthStat';
import { Header } from './shared/Header/Header';
// import { Popup } from './shared/Popup/Popup';


function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-stat/*" element={<MonthStat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
