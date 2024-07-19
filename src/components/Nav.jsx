import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
    return (
        <Navbar
            links={[
                <Link key={1} to="/">
                    Home
                </Link>,
                <Link key={2} to="/AboutMe">
                    About Me
                </Link>,
                <Link key={3} to="/Portfolio">
                    Portfolio
                </Link>,
                <Link key={4} to="/Contact">
                    Contact
                </Link>,
                <Link key={5} to="/Resume">
                    Resume
                </Link>
            ]}
        />
    );
}