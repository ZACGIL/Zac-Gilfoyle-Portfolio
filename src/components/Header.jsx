import Nav from './Nav';

export default function Header() {
    return (
        <div className='bg-blue-950'>
            <div className='w-full mx-auto p-14 flex items-center justify-between'>
                <h1 className='text-white'>Zac Gilfoyle Portfolio</h1>
                    <  Nav />
            </div>
        </div>
    );
}