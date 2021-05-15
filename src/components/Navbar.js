import React, { useState } from 'react'
import * as vsc from "react-icons/vsc";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {
    const [sidebar, setSidebar] = useState(false)
    const location = useLocation()

    const showSidebar = ()=>{
        setSidebar(!sidebar)
    }

    return (
        <div className='container'>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <vsc.VscThreeBars onClick={showSidebar} color='white'/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='nav-toggle'>
                        <Link to='#' className='menu-bars'>
                            <vsc.VscClose color='white'/>
                        </Link>
                    </li>
                    <li className='nav-item'><Link to={{pathname:'/portfolio', state:{prevLocation:location.pathname}}}
                    onClick={()=>{
                        if(props.changeAnimation){
                            props.changeAnimation()
                        }
                    }
                    }>Home</Link></li>
                    <li className='nav-item'><Link to={{pathname:'/projects', state:{prevLocation:location.pathname}}}>Mes Expériences</Link></li>
                </ul>
            </nav>
            <div onClick={showSidebar} className={sidebar ? 'overlay active':'overlay'}></div>
        </div>
    )
}
