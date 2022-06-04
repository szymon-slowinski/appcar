import React, {Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider} from './contexts/Auth';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ErrorBoundary from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';

const HomeSite=React.lazy(()=> import('./components/HomeSite'));
const Signin = React.lazy(() => import ('./components/Signin'))
const Dashboard = React.lazy(() => import ('./components/Dashboard'))
const Footer = React.lazy(() => import ("./components/Footer"))
const Page404 = React.lazy(()=> import ("./components/error pages/Error404") ) 
const About = React.lazy(()=> import ('./components/About'))
const Profile = React.lazy(() => import('./components/Profile'))
const ForgotPassword = React.lazy(() => import('./components/ForgotPassword'))
const Calendar = React.lazy(() => import('./components/Calendar'))

const Retry_Delay=1000;
const Stale_Time = 60_000;
const Retry_Times = 0;

const queryClient = new QueryClient({
defaultOptions:{
  queries:{
    retry:Retry_Times,
    retryDelay: Retry_Delay,
    staleTime:Stale_Time
  }
}
})


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
    <Suspense fallback={<p>Loading...</p>}>
      <AuthProvider>
        <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path="/home"  element={<HomeSite/>} />
        <Route path='/login' element={<Signin/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='*' element={<Page404/>}/>
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
