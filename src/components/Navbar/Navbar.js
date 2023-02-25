import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import icons
import menu from '../../assets/icons/menu.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [path, setPath] = useState("");
    const location = useLocation();
    // toggle menu on mobile devices
    const toggleMenuElement = ()=>{
        setToggleMenu(!toggleMenu);
    }

    useEffect(()=>{
        setPath(location.pathname);
    }, [location])

    useEffect(()=>{
        setPath("/home");
    }, [])

    return (
        <>
            <div className='w-11/12 flex justify-between p-6 mx-auto'>
                <Logo />
                <div className='hidden md:flex items-center gap-16 sm:text-xs lg:text-sm md:text-xs text-white font-semibold'>
                    <ul className='flex items-center gap-8'>
                        <Link to="/home"> <li className={path === "/home" ? "text-primary border-b-4 border-secondary py-1": ""}>HOME</li></Link>
                        <Link to="/about"> <li className={path === "/about" ? "text-primary border-b-4 border-secondary py-1": ""}>ABOUT</li></Link>
                        <Link to="/team"> <li className={path === "/team" ? "text-primary border-b-4 border-secondary py-1": ""}>TEAM</li></Link>
                        <Link to="/work"> <li className={path === "/work" ? "text-primary border-b-4 border-secondary py-1": ""}>WORK</li></Link>
                        <Link to="/prices"> <li className={path === "/prices" ? "text-primary border-b-4 border-secondary py-1": ""}>PRICES</li></Link>
                        <Link to="/blog"> <li className={path === "/blog" ? "text-primary border-b-4 border-secondary py-1": ""}>BLOG</li></Link>
                        <Link to="/contact-us"> <li className={path === "/contact-us" ? "text-primary border-b-4 border-secondary-400 py-1": ""}>CONTACT US</li></Link>
                    </ul>

                    <ul className='md:hidden gap-3 lg:flex'>
                        <li className='w-4 h-4'><img src={facebook} alt="facebook" className='w-full h-full'/></li>
                        <li className='w-4 h-4'><img src={twitter} alt="facebook" className='w-full h-full'/></li>
                        <li className='w-4 h-4'><img src={instagram} alt="facebook" className='w-full h-full'/></li>
                    </ul>    
                </div>
                <button type='button' onClick={toggleMenuElement} className='block md:hidden w-8 h-8'>
                    <img src={menu} className="w-full h-full" alt='hamburger menu' />
                </button>
            </div>

            <div className={`${toggleMenu ? "md:hidden block" : "hidden"}`}>
                <div className={`${styles.centerAbs} absolute left-50 text-md text-white font-semibold bg-gray-700 w-full p-4`}>
                    <ul className='flex flex-col items-center gap-4'>
                        <Link onClick={toggleMenuElement} to="/home"> <li className={path == "/home" ? "text-primary": ""}>HOME</li></Link>
                        <Link onClick={toggleMenuElement} to="/about"> <li className={path == "/about" ? "text-primary": ""}>ABOUT</li></Link>
                        <Link onClick={toggleMenuElement} to="/team"> <li className={path == "/team" ? "text-primary": ""}>TEAM</li></Link>
                        <Link onClick={toggleMenuElement} to="/work"> <li className={path == "/work" ? "text-primary": ""}>WORK</li></Link>
                        <Link onClick={toggleMenuElement} to="/prices"> <li className={path == "/prices" ? "text-primary": ""}>PRICES</li></Link>
                        <Link onClick={toggleMenuElement} to="/blog"> <li className={path == "/blog" ? "text-primary": ""}>BLOG</li></Link>
                        <Link onClick={toggleMenuElement} to="/contact-us"> <li className={path == "/contact-us" ? "text-primary": ""}>CONTACT US</li></Link>
                        <ul className='flex gap-4'>
                            <li className='w-4 h-4'><img src={facebook} alt="facebook" className='w-full h-full'/></li>
                            <li className='w-4 h-4'><img src={twitter} alt="facebook" className='w-full h-full'/></li>
                            <li className='w-4 h-4'><img src={instagram} alt="facebook" className='w-full h-full'/></li>
                        </ul>
                    </ul>  
                </div>  
            </div>
        </>
  )
}

export default Navbar