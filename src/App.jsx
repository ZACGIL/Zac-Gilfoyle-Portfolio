import './index.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <header>
                < Header />
            </header>
            <main className='bg-black flex justify-center min-h-screen text-white'>
                < Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </>
    );
}