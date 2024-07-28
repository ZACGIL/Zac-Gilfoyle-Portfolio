import Button from "../UI/Button";

export default function Resume() {
    return (
        <div className="pt-6 pb-8 flex justify-center">
            <div className="w-8/12 font-body text-4xl leading-relaxed text-center">
                <h1 className="mb-10 text-red-500">To Be Finished...</h1>
                <div className="border p-4 font-read text-2xl">
                    <p className="my-4">This page is under construction, the plan being to have a more integrated document into the browser.</p>
                    <p className="my-4">However you may access my resume documentations in a folder.</p>
                </div>
                <div className="my-12 text-2xl text-left">
                    <h2 className="my-3">For the link to my Google Drive...</h2>
                    <Button link="https://drive.google.com/drive/folders/1ruOw_y9iAV9gs1qXBcetUHXN-ZfIFKV9?usp=sharing" className="bg-indigo-500 hover:bg-indigo-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></Button>
                </div>
            </div>
        </div>
    );
}