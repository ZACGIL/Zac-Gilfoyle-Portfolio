export default function Navbar({ links }) {
    return (
        <nav>
            <ul className='flex maxsm:flex-col'>
                {links.map((link) => link)}
            </ul>
        </nav>
    );
}