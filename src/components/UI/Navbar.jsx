export default function Navbar({ links }) {
    return (
        <nav>
            <div>
                <ul>
                    {links.map((link) => link)}
                </ul>
            </div>
        </nav>
    );
}