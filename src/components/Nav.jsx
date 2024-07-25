import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <div className='text-white'>
            <Navbar
            links={[
                <Link className='m-3' key={1} to="/">
                    Home
                </Link>,
                <Link className='m-3' key={2} to="/AboutMe">
                    About Me
                </Link>,
                <Link className='m-3' key={3} to="/Portfolio">
                    Portfolio
                </Link>,
                <Link className='m-3' key={4} to="/Contact">
                    Contact
                </Link>,
                <Link className='m-3' key={5} to="/Resume">
                    Resume
                </Link>
            ]}
        />
        </div>
    );
}