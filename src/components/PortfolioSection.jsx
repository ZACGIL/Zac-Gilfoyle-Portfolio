// structures the HTML of './pages/PortfolioPage.jsx'
import Card from "./UI/Card";
import image1 from "../images/port1.jpeg";
import image2 from "../images/port2.png";
import image3 from "../images/port3.png";
import image4 from "../images/port4.png";
import image5 from "../images/port5.png";
import placeholder from "../images/placeholder.png";

export default function PortfolioSection() {
    return (
        <div className="min-h-screen flex items-center">
            <div className="flex-1 justify-center p-8 mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    < Card
                        projectLink="https://zacgil.github.io/Zac-Gilfoyle-First-Portfolio-Website/"
                        gitLink="https://github.com/ZACGIL/Zac-Gilfoyle-First-Portfolio-Website"
                        title="First Portfolio"
                        source={image1}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        projectLink="https://dnd-character-builder-and-database.onrender.com/"
                        gitLink="https://github.com/SouptheFull-Stack/DND-Character-Builder-and-Database"
                        title="DND Character Builder"
                        source={image2}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        projectLink="https://isaacfallon.github.io/Weather-Driven-Wikipedia-Content-Explorer/"
                        gitLink="https://github.com/isaacfallon/Weather-Driven-Wikipedia-Content-Explorer"
                        title="Wikipedia Weather Explorer"
                        source={image3}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        projectLink="https://github.com/ZACGIL/Challenge-13-E-commerce-back-end"
                        gitLink="https://github.com/ZACGIL/Challenge-13-E-commerce-back-end"
                        title="E-Commerce Backend"
                        source={image4}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        projectLink="https://github.com/ZACGIL/Challenge-18-Social-Network-API"
                        gitLink="https://github.com/ZACGIL/Challenge-18-Social-Network-API"
                        title="Social Network Backend"
                        source={image4}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        projectLink="https://zacgil.github.io/Challenge-6-Weather-API/"
                        gitLink="https://github.com/ZACGIL/Challenge-6-Weather-API"
                        title="Weather Fetching API"
                        source={image5}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        title="Coming Soon"
                        source={placeholder}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        title="Coming Soon"
                        source={placeholder}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                    < Card
                        title="Coming Soon"
                        source={placeholder}
                        buttonClass="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                </ul>
            </div>
        </div>
    );
}