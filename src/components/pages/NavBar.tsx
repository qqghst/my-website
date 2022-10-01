import React, {useState} from 'react';
import {navLinks} from "../../constans";
import {logo, menu, close} from '../../assets'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="logo" className='w-[123px] h-[38px]'/>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`font-inter text-[16px] cursor-pointer text-whiteOppacity ${index === navLinks.length - 1 ? 'mr-0' : 'mr-[32px]'}`}
                    >
                        <a href={`#{nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={showMenu ? close : menu}
                    alt='menu'
                    className='object-contain'
                    onClick={() => setShowMenu(prevState => !prevState)}
                />
                <div
                    className={`${showMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-inter text-[13.33px] cursor-pointer text-[16px] text-whiteOppacity ${index === navLinks.length - 1 ? 'mr-0' : 'mb-[32px]'}`}
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