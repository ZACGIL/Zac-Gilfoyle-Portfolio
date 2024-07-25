import Button from "./Button";

export default function Card(props) {
    return (
        <div className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`${props.projectLink || '#'}`}>
                <img className="object-cover w-full h-4/6 rounded-t-lg" src={props.source} alt={props.alt} />
            </a>
            <div class="p-5">
                <a href={`${props.projectLink || '#'}`}>
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${props.title || 'Card Title'}`}</h2>
                </a>
                <div>
                    <Button link={props.gitLink} className={props.buttonClass} />
                </div>
            </div>
        </div>
    );
}