import { Link } from 'react-router-dom'
import Navbar from './UI/Navbar'

export default function Socials() {
    return (
        <div className='text-white font-title'>
            <Navbar
                links={[
                    <Link className='m-6 hover:text-red-600' key={1} to="https://www.linkedin.com/in/zac-gilfoyle-a24452145/">
                        LinkedIn
                    </Link>,
                    <Link className='m-6 hover:text-red-600' key={2} to="https://github.com/ZACGIL">
                        GitHub
                    </Link>,
                    <Link className='m-6 hover:text-red-600' key={3} to="mailto:zac.gilfoyle@gmail.com">
                        Email
                    </Link>
                ]}
            />
        </div>
    );
}