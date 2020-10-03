import React, {useState, useEffect} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {ReactComponent as UpArrow} from '../assets/UpArrowCircle.svg';

const Header = () => {
    const [menuState, setMenuState] = useState({menuOpened: false});
    useEffect(() => {
        if (menuState.menuOpened) {
            //run open menu animation
        } else {
            //run close menu animation
        }
    }, [menuState.menuOpened]);
    return (
        <div className='header'>
            <div className='container'>
                <div className='row v-center space-between'>
                    <div className='logo'>
                        <a href='/'>AGENCY.</a>
                    </div>
                    <div className='nav-toggle'>
                        <div
                            className='hamburger-menu'
                            onClick={() => setMenuState({menuOpened: true})}
                        >
                            <span></span>
                            <span></span>
                        </div>
                        <div
                            className='hamburger-menu-close'
                            onClick={() => setMenuState({menuOpened: false})}
                        >
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
