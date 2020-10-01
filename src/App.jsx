import React, {useEffect} from 'react';
import gsap from 'gsap';
import './styles/App.scss';
//component
import Header from './components/Header';
import Navigation from './components/Navigation';
//pages
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Approach from './pages/Approach';
import Services from './pages/Services';
import About from './pages/About';
import {Route} from 'react-router-dom';

//routes
const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/case-studies', name: 'Case Studies', Component: CaseStudies},
    {path: '/approach', name: 'Approach', Component: Approach},
    {path: '/services', name: 'Services', Component: Services},
    {path: '/about-us', name: 'About Us', Component: About},
];

function App() {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        //prevents body flashing
        gsap.to('body', 0, {css: {visibility: 'visible'}});
    }, []);
    return (
        <>
            <Header />
            <div className='App'>
                {routes.map(({path, Component}) => (
                    <Route key={path} exact path={path}>
                        <Component />
                    </Route>
                ))}
            </div>
            <Navigation />
        </>
    );
}

export default App;
