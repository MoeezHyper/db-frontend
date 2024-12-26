import React from 'react'
import { Link } from 'react-router-dom';
import './Mainpage.css'; 
import Footer from'./Footer'; 
import Navbar from './Navbar';

const Mainpage = () => {
    return (
        <div>
            <Navbar/>
            <div className="mainpage"></div>
            <Footer/>
        </div>
    )
}

export default Mainpage