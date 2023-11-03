import { Link, NavLink } from 'react-router-dom';
import { AiFillAlert, AiOutlineArrowRight, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBookmarks, BsChatLeft } from 'react-icons/bs'
import { VscSymbolColor } from 'react-icons/vsc'
import { IoIosLogOut, IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io'
import './navigator.css';
import { useState } from 'react';
import { useTheme } from '../../context/theme/theme_context';
export const NavigatorComponent = ()=>{
    const [open,setOpen] = useState(false);
    const {theme,setTheme}= useTheme();
    return(
        <nav className='nav-parent' data-nav={!open ? "close" : "open" }>
            <button className='nav-button' onClick={()=>setOpen(!open)}>
                <AiOutlineArrowRight/>
            </button>

            <section className='nav-top-options nav-responsive-hidden'>
                <div>
                    <span className='nav-icon-user'>
                        O
                        {/* <img src="" alt="icon user" /> */}
                    </span>
                </div>
                <div className='nav-user-description nav-close-block'>
                    <h1>Octavio</h1>
                    <p>Siempre lol</p>
                </div>
            </section>

            <section className='nav-mid-options'>
                <ul>
                    <li className='nav-li-option nav-responsive-hidden'>
                        <Link tooltip-parent="true">
                            <span>
                                <BsChatLeft/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Chats</span>
                        </Link>
                    </li>

                    <li className='nav-li-option'>
                        <Link tooltip-parent="true">
                            <span>
                                <AiOutlineUser/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Mi cuenta</span>
                        </Link>
                    </li>

                    <li className='nav-li-option'>
                        <Link tooltip-parent="true">
                            <span>
                                <AiOutlineHome/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Home</span>
                        </Link>
                    </li>
                    <li className='nav-li-option'>
                        <Link tooltip-parent="true">
                            <span>
                                <IoMdNotificationsOutline/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Notificación</span>
                        </Link>
                    </li>
                    <li className='nav-li-option nav-responsive-hidden'>
                        <Link tooltip-parent="true">
                            <span>
                                <BsBookmarks/>
                                
                            </span>
                            <span className='nav-tooltip nav-close-block'>Guardados</span>
                        </Link>
                    </li>
                    
                </ul>
            </section>

            <section className='nav-bottom-options'>
                <ul>
                    <li className='nav-li-option'>
                       <button className='btn'>
                            <span>
                                <IoIosLogOut/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Cerrar sesión</span>
                       </button> 
                    </li>
                    <li className='nav-li-option'>
                       <button className='btn'>
                            <span>
                                <IoMdSettings/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>ajustes</span>
                       </button> 
                    </li>
                    <li className='nav-li-option'>
                       <button className='btn' onClick={()=>setTheme(theme != "dark-blue" ? "dark-blue" : "light")}>
                            <span>
                                <VscSymbolColor/>
                            </span>
                            <span className='nav-tooltip nav-close-block'>Tema</span>
                       </button> 
                    </li>
                </ul>
            </section>

        </nav>
    )
}