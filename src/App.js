import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PointsTable from './components/PointsTable/PointsTable';
import './style.css';

function App() {
  return (
    <div className="epl">
      <Header></Header>
      <section className="entry-content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/teams' element={<Home />} />
          <Route path='/table' element={<PointsTable />} />
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
