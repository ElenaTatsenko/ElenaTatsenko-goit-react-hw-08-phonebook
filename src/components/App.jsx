import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {  lazy, Suspense, useEffect } from 'react';
import Loader from './Loader';
import {PrivateRoute} from '../routers/PrivateRoute';
import { PublicRoute } from '../routers/PublicRoute';
import { refreshUser } from 'redux/auth/operations';
import { useSelector } from 'react-redux';

const Layout = lazy(() => import('./Loyout')) ;
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
         {!isRefreshing && (
           <Routes>
             <Route path="/" element={<Layout />}>
               <Route index element={<PublicRoute><HomePage/></PublicRoute>} />
               <Route path="/register" element={<PublicRoute restricted><RegisterPage/></PublicRoute>}></Route>
               <Route path="/login" element={<PublicRoute restricted><LoginPage /></PublicRoute>}></Route>
               <Route path="/contacts" element={<PrivateRoute ><ContactsPage /></PrivateRoute>}></Route>
               <Route path="*" element={<PublicRoute></PublicRoute>}></Route>
             </Route>
           </Routes>
         )}
       </Suspense>
    </>  
)  
}; 
