
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import Loader from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {

    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
                <ToastContainer autoClose={3000}></ToastContainer>
            </Suspense>
            
        </div>
    )
};

export default Layout;