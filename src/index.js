import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/content/Movie.page";
import TvShowPage from "./pages/tvseries/TvShow.page";
import PopularPerson from "./pages/popular person/PopularPerson.page";
import PageNotFonud from "./pages/404/404";
import Home1Page from "./pages/home page/Home1.page";
import TrendingMovieInfo from "./pages/trending movie info/TrendingMovieInfo.page";
import "./18n/18n";
import SearchPage from "./pages/search results/Search.page";
import MoviesDetails from "./pages/navbar details/Movies.details";
import ShowDetails from "./pages/navbar details/Show.detalis";
import PersonDetails from "./pages/navbar details/Person.detail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ShoppingPage from "./pages/shopping/Shopping.page";
import Watchlist from "./pages/Watchlist/Watchlist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home1Page />} />
            <Route path="/movies/:title" element={<MoviePage />} />
            <Route path="/tv/:title" element={<TvShowPage />} />
            <Route path="/person" element={<PopularPerson />} />
            <Route path="/movie/:id" element={<TrendingMovieInfo />} />
            <Route path="/search/:title" element={<SearchPage />} />
            <Route path="/movies/:id" element={<MoviesDetails />} />
            <Route path="/tv/show_details/:id" element={<ShowDetails />} />
            <Route path="/person/:id" element={<PersonDetails />} />
            <Route path="/Favourite" element={<ShoppingPage />} />
            <Route path="/Watchlist" element={<Watchlist/>}/>
          </Route>
          <Route path="*" element={<PageNotFonud />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </Provider>
);
