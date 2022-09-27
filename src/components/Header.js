import React,{useState} from 'react';
import './Header.css';
import { FaHome, FaInfo, FaLightbulb, FaChalkboardTeacher, FaImages, FaHandshake, FaWpforms, FaPhoneAlt } from "react-icons/fa";
import {Link } from 'react-router-dom';
import { IoSchoolSharp } from "react-icons/io5";


const Header = () => {

    
    return (
        <div className='header'>
            <nav>
                <ul className='ul-item'>

                    {/* Home */}
                    <li>
                        <FaHome className='icon'/>
                        <Link to='/'>Home</Link>
                    </li>


                    {/* about */}
                    <li>
                        <FaInfo className='icon'/>
                        <Link to='/'>About us</Link>
                    </li>


                    {/* Sectors */}
                    <li>
                        < FaLightbulb className='icon'/>
                        <Link to='/'>Themes</Link>
                    </li>


                    {/* Mentors */}
                    <li>
                        <FaChalkboardTeacher className='icon'/>
                        <Link to='/'>Mentors</Link>
                    </li>

                    {/* Gallery */}
                    <li>
                        <FaImages className='icon'/>
                        <Link to='/'>Gallery</Link>
                    </li>

                    {/* Campus Ambassador */}
                    <li>
                        <IoSchoolSharp className='icon'/>
                        <Link to='/'>Campus Ambassador</Link>
                    </li>

                    {/* Event Partners */}
                    <li>
                        <FaHandshake className='icon'/>
                        <Link to='/'>Event Partners</Link>
                    </li>

                    {/* Registration Form */}
                    <li>
                        <FaWpforms className='icon'/>
                        <Link to='/'>Registration Form</Link>
                    </li>

                    {/* Contact  */}
                    <li>
                        <FaPhoneAlt className='icon'/>
                        <Link to='/ContactUs'>Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header
