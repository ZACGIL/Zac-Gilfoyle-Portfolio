import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/AboutMe',
                element: <AboutMe />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
