import Button from "./Button";

export default function Card(props) {
    return (
        <div>
            <div>
                <p>Badge</p>
            </div>
            <div>
                <img src={props.source} alt={props.alt} />
            </div>
            <div>
                <h2>{`${props.title || 'Card Title'}`}</h2>
                <Button link={props.link} classes={props.classes} />
            </div>
        </div>
    );
}