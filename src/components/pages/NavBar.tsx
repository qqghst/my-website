import React, {useState} from 'react';
import {navLinks} from "../../constans";
import {logo, menu, close} from '../../assets/imports';
import styles from '../../styles';

const NavBar: React.FC = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        //items-center navbar
        <nav className='w-full flex justify-between py-[70px]'> 
            <img src={logo} alt="logo" className='w-[123px] h-[38px]'/>

            {/* list-none items-center flex-1*/}
            <ul className='sm:flex hidden justify-end'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`${styles.navlinks} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[32px]'}`}
                    >
                        <a href={`#{nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            
            {/* flex-1 items-center justify-end */}
            <div className='sm:hidden flex'>
                <img
                    src={showMenu ? close : menu}
                    alt='menu'
                    className='object-contain z-[10]'
                    onClick={() => setShowMenu(prevState => !prevState)}
                />
                <div
                    // className={`${showMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    className={`${showMenu ? 'flex' : 'hidden'} z-[9] w-full h-full bg-white absolute top-0 right-0 mx-0 my-0 overflow-hidden`}
                >
                    {/* list-none */}
                    <ul className='flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`${styles.navlinks} ${index === navLinks.length - 1 ? 'mr-0' : 'mb-[32px]'}`}
                            >
                                <a href={`#{nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;