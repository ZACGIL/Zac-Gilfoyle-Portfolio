import Nav from './Nav';

export default function Header() {
    return (
        <div className='bg-black shadow text-2xl'>
            <div className='w-full mx-auto p-14 flex items-center justify-between'>
                <div className='p-1'>
                    <h1 className='text-indigo-500 text-4xl font-title'>ZAC GILFOYLE PORTFOLIO</h1>
                </div>
                <Nav />
            </div>
        </div>
    );
}