import React, {lazy, Suspense} from 'react';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Navbar, Loading } from './components';

const Home = lazy(() => import('./Pages/Home'))
const Profile = lazy(() => import('./Pages/Profile'))
const Error = lazy(() => import('./Pages/Error'))





function App() {

  return (
    <BrowserRouter>
      <Navbar/>
       <Suspense fallback={<div className='flex justify-center items-center min-h-screen'><Loading/></div>}>
      <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/profile/:username' element={<Profile/>}></Route> 
           <Route path='*' element={<Error/>}></Route>
      </Routes>
      </Suspense>
     
    </BrowserRouter>
  );
}

export default App;
