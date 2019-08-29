import React from 'react';
import logo from '../assets/logo2.png';
import '../css/Header.css';

export default function Header() {
    return (
        <header id="main-header">
            <div className = "header-content">
                <img src ={logo} alt="Sicredi"/>
            </div>      
        </header>
    );
}