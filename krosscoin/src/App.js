import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SuspenseLoader from './utils/SuspenseLoader';
import './App.css';
const Home = React.lazy(() => import('./pages/Home'))
const Products = React.lazy(() => import('./pages/Products/Products'))
const Services = React.lazy(() => import('./pages/Products/Services'))
const Wallet = React.lazy(() => import('./pages/Wallet/Wallet'))
const Create = React.lazy(() => import('./pages/Account/Create'))
const Login = React.lazy(() => import('./pages/Account/Login'))
const LatestBlocks = React.lazy(() => import('./pages/LatestBlocks/LatestBlocks'))

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<SuspenseLoader />}>
          <Home />
        </Suspense>
      } />
      <Route path="/products">
        <Route index={true} element={
          <Suspense fallback={<SuspenseLoader />}>
            <Products />
          </Suspense>
        } />
        <Route path='services' element={
          <Suspense fallback={<SuspenseLoader />}>
            <Services />
          </Suspense>
        } />
      </Route>
      <Route index={true} path='/wallet' element={
        <Suspense fallback={<SuspenseLoader />}>
          <Wallet />
        </Suspense>
      } />
      <Route index={true} path='/login' element={
        <Suspense fallback={<SuspenseLoader />}>
          <Login />
        </Suspense>
      } />
      <Route path='latest-blocks' element={
        <Suspense fallback={<SuspenseLoader />}>
          <LatestBlocks />
        </Suspense>
      } />
      <Route index={true} path='/create' element={
        <Suspense fallback={<SuspenseLoader />}>
          <Create />
        </Suspense>
      } />

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
