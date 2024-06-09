import React from 'react';
import './component.css';
import logo from '../Images/sliate.jpg';

export default function Header(){
    return(
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt="" srcset="" />
            </div>
           <div className='navigation'>
            <ul>
            <li>
                <input type="radio" name="navigations" id="check-home"/>
                <label htmlFor='check-home' className='nav-label'>Home</label>
            </li>
            <li>
                <input type="radio" name="navigations" id="check-about" />
                <label htmlFor='check-about'  className='nav-label'>About us</label>
            </li>
            <li>
                <input type="radio" name="navigations" id="check-news"/>
                <label htmlFor='check-news' className='nav-label'>News</label>
            </li>
            <li>
                <input type="radio" name="navigations" id="check-courses" />
                <label htmlFor='check-courses'  className='nav-label'>Courses</label>
            </li> <li>
                <input type="radio" name="navigations" id="check-research"/>
                <label htmlFor='check-research' className='nav-label'>Research</label>
            </li>
            <li>
                <input type="radio" name="navigations" id="check-contact" />
                <label htmlFor='check-contact'  className='nav-label'>Contact us</label>
            </li>
            
               

            </ul>
           </div>
        </div>
    )
}