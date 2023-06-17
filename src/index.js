import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/content/Movie.page";
import TvShowPage from "./pages/tvseries/TvShow.page";
import PopularPerson from "./pages/popular person/PopularPerson.page";
import PageNotFonud from "./pages/404/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route path="/movie/:title" element={<MoviePage />} />
      <Route path="/tv/:title" element={<TvShowPage />} />
      <Route path="/person" element={<PopularPerson/>}/>
      </Route>
      <Route path="*" element={<PageNotFonud/>}/>
    </Routes>
  </BrowserRouter>
);
