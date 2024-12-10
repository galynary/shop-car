import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../page/Home'));
const About = lazy(() => import('../page/About'));
const Catalog = lazy(() => import('../page/Catalog'));
const Contacts = lazy(() => import('../page/Contacts'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </Suspense>
  );
};
