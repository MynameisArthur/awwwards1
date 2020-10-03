import React, {useState, useEffect} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {ReactComponent as UpArrow} from '../assets/UpArrowCircle.svg';
import gsap from 'gsap';

let tl = gsap.timeline();

const Header = ({dimensions}) => {
    const [menuState, setMenuState] = useState({menuOpened: false});
    useEffect(() => {
        if (menuState.menuOpened) {
            //run open menu animation
            gsap.to('nav', {css: {display: 'block'}});
            gsap.to('body', {css: {overflow: 'hidden'}});
            tl.to('.App', {
                duration: 1,
                y: dimensions.width <= 654 ? '70vh' : dimensions.height / 1.75,
                ease: 'expo.inOut',
            })
                .to('.hamburger-menu span', {
                    duration: 0.6,
                    delay: -1,
                    scaleX: 0,
                    transformOrigin: '50% 0%',
                    ease: 'expo.inOut',
                })
                .to('#Path_1', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 5,
                    },
                })
                .to('#Path_2', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 20,
                    },
                })
                .to('#Line_1', {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 40,
                        strokeDasharray: 18,
                    },
                })
                .to('#circle', {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        strokeDashoffset: 0,
                    },
                })
                .to('.hamburger-menu-close', {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        display: 'block',
                    },
                });
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
