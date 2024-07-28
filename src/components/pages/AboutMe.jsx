import Button from "../UI/Button";

export default function AboutMe() {

    return (
        <div className="pt-6 pb-8 flex justify-center">
            <div className="w-8/12 md:w-6/12 font-body text-4xl leading-relaxed text-center">
                <h1 className="mb-10 text-red-500">About Me</h1>
                <div className="border p-4 font-read text-2xl">
                    <p className="my-4">Welcome to my portfolio website!!!</p>
                    <p className="my-4">My name is Zac Gilfoyle and I'm passionate about understanding how things work and finding solutions to problems. I intially started as a games developer, programming in C# but decided to shift careers and looked into expanding my skills into other areas of software development. I am currently learning tools across the development stack and seek to keep improving my ability across a multitude of languages and frameworks. Eventually aiming to become a full-stack web developer.</p>
                    <p className="my-4">This website highlights some projects I've been working on to hone my web development abilites. Along with containing links for contact or repositories I'm currently working on.</p>
                    <p className="my-4">Thanks for visiting!</p>
                </div>
                <div className="flex justify-between my-12 flex-col md:flex-row text-2xl text-left">
                    <div className="m-3">
                        <h2>To view examples of my projects and body of work...</h2>
                        <Button link="/Portfolio" className="bg-indigo-500 hover:bg-indigo-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></Button>
                    </div>
                    <div className="m-3">
                        <h2>To view my resume of skills and experience...</h2>
                        <Button link="/Resume" className="bg-indigo-500 hover:bg-indigo-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}