import React, {Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/Auth';
const HomeSite=React.lazy(()=> import('./components/HomeSite'));
const Navbar = React.lazy(()=> import('./components/Navbar'));
const Signin = React.lazy(() => import ('./components/Signin'))
const Dashboard = React.lazy(() => import ('./components/Dashboard'))
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<HomeSite/>} />
        <Route path='/login' element={<Signin/>}/>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
