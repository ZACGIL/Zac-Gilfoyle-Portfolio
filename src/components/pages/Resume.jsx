import Button from "../UI/Button";

export default function Resume() {
    return (
        <div className="pt-6 pb-8 flex justify-center">
            <div className="w-8/12">
                <h1 className="mb-10">To Be Finished...</h1>
                <div>
                    <p className="my-4">This page is under construction, the plan being to have a more integrated document into the browser.</p>
                    <p className="my-4">However you may access my resume documentations in a folder.</p>
                </div>
                <div className="my-12">
                    <h2 className="my-3">For the link to my Google Drive...</h2>
                    <Button link="https://drive.google.com/drive/folders/1ruOw_y9iAV9gs1qXBcetUHXN-ZfIFKV9?usp=sharing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></Button>
                </div>
            </div>
        </div>
    );
}