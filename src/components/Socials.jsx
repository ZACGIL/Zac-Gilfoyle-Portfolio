import { Link } from 'react-router-dom'
import Navbar from './UI/Navbar'

export default function Socials(){
    return (
        <Navbar 
            links={[
                <Link key={1} to="https://www.linkedin.com/in/zac-gilfoyle-a24452145/">
                    LinkedIn
                </Link>,
                <Link key={2} to="https://github.com/ZACGIL">
                    GitHub
                </Link>,
                <Link key={3} to="mailto:zac.gilfoyle@gmail.com">
                    Email
                </Link>
            ]}
        />
    );
}