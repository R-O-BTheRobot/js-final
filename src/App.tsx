//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import './App.css'

function App() {
    //const [count, setCount] = useState(0)
    document.body.classList.add('bg-gray-100', 'dark:bg-slate-700');

    return (
        <>
            <Navbar/>
            <div className='flex justify-center'>
                <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
