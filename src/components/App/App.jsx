import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, Outlet } from 'react';

import { SharedLayout } from '../SharedLayout/SharedLayout';

import css from '../App/app.module.css';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/1" element={<MovieDetails />}>
              <Route path="/movies/1/cast" element={<Cast />} />
              <Route path="/movies/1/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
