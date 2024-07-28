import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from './UI/Navbar';

export default function Nav() {

    //Checks page and adds border to the bottom
    const location = useLocation();
    const [isHome, setHomeActive] = useState(true);
    const [isAboutMe, setAboutActive] = useState(false);
    const [isContact, setConActive] = useState(false);
    const [isResume, setResActive] = useState(false);
    const [isPortfolio, setPortActive] = useState(false);

    useEffect(() => {
        checkPage(location.pathname);
    }, [location]);

    const checkPage = (page) => {
        if (page === '/') {
            setHomeActive(true);
            setAboutActive(false);
            setConActive(false);
            setResActive(false);
            setPortActive(false);
            return;
        }
        if (page === '/AboutMe') {
            setHomeActive(false);
            setAboutActive(true);
            setConActive(false);
            setResActive(false);
            setPortActive(false);
            return;
        }
        if (page === '/Contact') {
            setHomeActive(false);
            setAboutActive(false);
            setConActive(true);
            setResActive(false);
            setPortActive(false);
            return;
        }
        if (page === '/Resume') {
            setHomeActive(false);
            setAboutActive(false);
            setConActive(false);
            setResActive(true);
            setPortActive(false);
            return;
        }
        if (page === '/Portfolio') {
            setHomeActive(false);
            setAboutActive(false);
            setConActive(false);
            setResActive(false);
            setPortActive(true);
        }
    }

    return (
        <div className='text-white font-title'>
            <Navbar
                links={[
                    <Link
                        className={isHome ? 'm-3 border-4 border-black  border-b-red-500' : 'm-3 border-4 border-black hover:text-red-600'}
                        key={1}
                        to="/">
                        Home
                    </Link>,
                    <Link
                        className={isAboutMe ? 'm-3 border-4 border-black  border-b-red-500' : 'm-3 border-4 border-black hover:text-red-600'}
                        key={2}
                        to="/AboutMe">
                        About Me
                    </Link>,
                    <Link
                        className={isPortfolio ? 'm-3 border-4 border-black  border-b-red-500' : 'm-3 border-4 border-black hover:text-red-600'}
                        key={3}
                        to="/Portfolio">
                        Portfolio
                    </Link>,
                    <Link className={isContact ? 'm-3 border-4 border-black  border-b-red-500' : 'm-3 border-4 border-black hover:text-red-600'}
                        key={4}
                        to="/Contact">
                        Contact
                    </Link>,
                    <Link className={isResume ? 'm-3 border-4 border-black  border-b-red-500' : 'm-3 border-4 border-black hover:text-red-600'}
                        key={5}
                        to="/Resume">
                        Resume
                    </Link>
                ]}
            />
        </div>
    );
}