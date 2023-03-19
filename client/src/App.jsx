import React from 'react'
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateProfile from './components/profile/PrivateProfile';
import PublicProfile from './components/profile/PublicProfile';

const Listing = React.lazy(() => import('./pages/Listing'))
const Navbar = React.lazy(() => import('./components/Navbar'))
const SubListing = React.lazy(() => import('./components/listings/SubListing'))
const Create = React.lazy(() => import('./pages/Create'))
const Delivery = React.lazy(() => import('./pages/Delivery'))
const Messages = React.lazy(() => import('./pages/Messages'))
const Signin = React.lazy(() => import('./pages/Signin'))
const RequireAuth = React.lazy(() => import('./components/RequireAuth'))
const ChooseCountry = React.lazy(() => import('./components/signin/ChooseCountry'))
const About = React.lazy(() => import('./pages/About'))
const Buying = React.lazy(() => import('./components/delivery/Buying'));
const Selling = React.lazy(() => import('./components/delivery/Selling'));
const SingleChat = React.lazy(() => import('./components/messages/SingleChat'));
const Signup = React.lazy(() => import('./pages/Signup'));

const ROLES = {
  'User': 2001,
  'Admin': 5150
}

const Loader =
  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} className=''>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#494949', '#494949', '#494949', '#494949', '#494949']}
    />
  </div>

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Suspense fallback={Loader}><Navbar><Listing /></Navbar></Suspense>} />
        <Route path="/create" element={<Suspense fallback={Loader}><Navbar><Create /></Navbar></Suspense>} />
        < Route path="/delivery" element={<Suspense fallback={Loader}><Navbar><Delivery /></Navbar></Suspense >} />
        < Route path="/messages" element={<Suspense fallback={Loader}><Navbar><Messages /></Navbar></Suspense >} />
        < Route path="/signin" element={<Suspense fallback={Loader}>< Signin /></Suspense>} />
        < Route path="/signup" element={<Suspense fallback={Loader}>< Signup /></Suspense>} />
        < Route path="/about" element={<Suspense fallback={Loader}><Navbar><About /></Navbar></Suspense>} />

        {/* Nested Public Routes */}
        <Route path="/signin">
          <Route path="country" element={<Suspense fallback={Loader}><ChooseCountry /></Suspense>} />
        </Route>

        <Route path="/profile">
          <Route path="public" element={<Suspense fallback={Loader}><Navbar><PublicProfile /></Navbar></Suspense>} />
          <Route path="private" element={<Suspense fallback={Loader}><Navbar><PrivateProfile /></Navbar></Suspense>} />
        </Route>

        <Route path="/messages">
          <Route path="chat" element={<Suspense fallback={Loader}><Navbar><SingleChat /></Navbar></Suspense>} />
        </Route>

        <Route path="/delivery">
          <Route path="buying" element={<Suspense fallback={Loader}><Navbar><Delivery><Buying /></Delivery></Navbar></Suspense>} />
          <Route path="selling" element={<Suspense fallback={Loader}><Navbar><Delivery><Selling /></Delivery></Navbar></Suspense>} />
        </Route>

        {/*Nested Protected routes */}
        <Route path="/" element={<Suspense fallback={Loader}><RequireAuth allowedRoles={[ROLES.User]} /></Suspense>}>

          <Route path="/listing">
            <Route path="sublisting" element={<Suspense fallback={Loader}><Navbar><SubListing /></Navbar></Suspense>} />
          </Route>

        </Route>

      </Routes >
    </BrowserRouter >
  )
}

export default App