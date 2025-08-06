import { useState } from 'react';
import Logo from '../../assets/amazonLogo.png';
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleOpenMenu = () => setOpenMenu(!openMenu);

    return (
        <header>
            <div className='container'>
                <FiMenu className='iconMenu' onClick={toggleOpenMenu} />
                <img src={Logo} alt='logo' />
                <div className={`menu ${openMenu === true ? "openMenu" : ""}`}>
                    <ul className='navs'>
                        <li>
                            <LiaTimesSolid onClick={toggleOpenMenu} />
                        </li>
                        <li>
                            <a href="/">home</a>
                        </li>
                        <li>
                            <a href="/shop">shop</a>
                        </li>
                        <li>
                            <a href="/our-services">services</a>
                        </li>
                        <li>
                            <a href="/contactus">contact us</a>
                        </li>
                    </ul>

                    <div>    
                        <div
                            className='dropdown'
                            onClick={toggleDropdown}
                        >
                            admin
                            <IoIosArrowDown />
                        
                            {isOpen && (
                                <div className="dropdownMenu absolute mt-2 left-[10px] w-40 bg-white shadow-lg rounded-md z-10">
                                    <ul className="logOut py-1 text-gray-700">
                                        <li className="">
                                            <MdOutlineAccountCircle />
                                            <div>my account</div>
                                        </li>
                                        <div className='dropdown-divider'></div>
                                        <li className="">
                                            <IoIosLogOut />
                                            <div>log out</div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
