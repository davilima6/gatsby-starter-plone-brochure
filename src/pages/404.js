import React from 'react';
import { Header } from '../components/Header';
import { Helmet } from '../components/Helmet';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet />
      <Header />
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <p>404 Not found</p>
      </div>
    </>
  );
};

export default NotFoundPage;
