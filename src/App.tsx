import React from 'react';
import Home from './app/dashboard/Home';
import Login from './app/login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './app/dashboard/User';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/users" caseSensitive={false} element={<Home />} />
          <Route path="/user/details" caseSensitive={false} element={<User />} />
          <Route path="/" caseSensitive={false} element={<Login />} />
          <Route path="*" caseSensitive={false} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
