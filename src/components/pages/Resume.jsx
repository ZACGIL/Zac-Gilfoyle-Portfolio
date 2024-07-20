import { Link } from "react-router-dom"

export default function Resume() {
    return (
        <div>
            <h1>To Be Finished...</h1>

            <p>This page is under construction, the plan being to have a more integrated document into the browser.</p>
            <p>However you may access my resume document in the Google Drive link below.</p>

            <Link key={1} to="https://drive.google.com/drive/folders/1ruOw_y9iAV9gs1qXBcetUHXN-ZfIFKV9?usp=sharing">
                Click Here
            </Link>
        </div>
    );
}