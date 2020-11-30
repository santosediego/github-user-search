import React from 'react';
import Routes from './Routes';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css'

const App = () => {
    return(
        <>
            <ToastContainer position="top-center" transition={Flip} />
            <Routes/>
        </>
        
    );
}

export default App;;