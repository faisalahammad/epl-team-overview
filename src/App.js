import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PointsTable from "./components/PointsTable/PointsTable";
import Team from "./components/Team/Team";
import "./style.css";

function App() {
  return (
    <div className="epl">
      <Header></Header>
      <section className="entry-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/table" element={<PointsTable />} />
          <Route path="/team/:id" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
