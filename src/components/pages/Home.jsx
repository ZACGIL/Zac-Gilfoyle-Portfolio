import Button from "../UI/Button";

export default function Home() {

    return (
        <div>
            <h1 className="text-center text-green-600">Welcome!</h1>
            <Button link="/AboutMe"></Button>
        </div>
    );
}