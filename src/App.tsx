import React, {Suspense} from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider} from './contexts/Auth';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import ErrorBoundary from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const HomeSite=React.lazy(()=> import('./components/HomeSite'));
const Signin = React.lazy(() => import ('./components/Signin'))
const Dashboard = React.lazy(() => import ('./components/Dashboard'))
const Footer = React.lazy(() => import ("./components/Footer"))
const Page404 = React.lazy(()=> import ("./components/error pages/Error404") ) 
const About = React.lazy(()=> import ('./components/About'))
const Profile = React.lazy(() => import('./components/Profile'))
const ForgotPassword = React.lazy(() => import('./components/ForgotPassword'))
const Calendar = React.lazy(() => import('./components/Calendar'))
const Cars = React.lazy(() => import('./components/Cars'))
const ForgotPasswordForm = React.lazy(() => import('./components/ForgotPasswordForm'))
const SingleCarPage = React.lazy(()=> import('./components/SingleCarPage'))


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
      <BrowserRouter>
      <ErrorBoundary>
    <Suspense fallback={<p>Loading...</p>}>
      <AuthProvider>
        <ToastContainer position="top-center"
            limit={3}
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover/>  
      <Switch>
       <Route exact path="/">
        <HomeSite/>
       </Route>
        <Route path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/calendar'>
          <Calendar/>
        </Route>
        <Route path ='/cars'>
          <Cars/>
        </Route>
        <Route  path='/cars/:id'>
          <SingleCarPage/>
        </Route>
        <Route path='/login'>
          <Signin/>
        </Route>
        <Route path= '/about'>
          <About/>
        </Route>
        <Route path='/forgot-password'>
          <ForgotPassword/>
        </Route>
        <Route path='/reset-password'>
          <ForgotPasswordForm/>
        </Route>
        <Route path='*'>
          <Page404/>
        </Route>
      </Switch>
      </AuthProvider>
      <Footer/>
    </Suspense>
      </ErrorBoundary>
      </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
