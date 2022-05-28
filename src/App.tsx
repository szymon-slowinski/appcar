import React, {Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/Auth';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ErrorBoundary from './components/ErrorBoundary';

const HomeSite=React.lazy(()=> import('./components/HomeSite'));
const Navbar = React.lazy(()=> import('./components/Navbar'));
const Signin = React.lazy(() => import ('./components/Signin'))
const Dashboard = React.lazy(() => import ('./components/Dashboard'))
const Footer = React.lazy(() => import ("./components/Footer"))

const queryClient = new QueryClient({
defaultOptions:{
  queries:{
    retry:0
  }
}
})


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
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
      <Footer/>
    </Suspense>
      </ErrorBoundary>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
