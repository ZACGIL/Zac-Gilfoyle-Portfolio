import Button from "../UI/Button";

export default function Home() {

    return (
        <div className="text-center">
            <h1 className="my-12">Welcome!</h1>
            <h1 className="mb-40">I am Zac</h1>
            <h1 className="mb-40">I am a full stack web developer</h1>
            <h1 className="mb-40">My languages/tools/frameworks include:</h1>
            <h2 className="mb-40">HTML CSS JavaScript NoSQL SQL</h2>
            <h2 className="mb-4">Find out more here...</h2>
            <Button link="/AboutMe" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></Button>
        </div>
    );
}