import Link from "./Link";
// import { useLocalStorage } from "@uidotdev/usehooks";
// import { useEffect } from "react";

function toggleDark():void {
    const body = document.querySelector('body')!;
    body.classList.toggle("dark");
}
export default () => {
    // const [darkMode, saveDarkMode] = useLocalStorage("isDarkModeEnabled", false);//domyślnie bedzie wyłączony tryb gdy wchodzimy pierwszy raz na stronę

    // useEffect(() => {
    //     const body = document.querySelector('body')!;
    //     if(darkMode) {
    //         body.classList.add("dark");
    //     } else {
    //         body.classList.remove("dark");
    //     }
    // }, [darkMode]);

    // const toggleDark = () => {
    //     saveDarkMode(!darkMode);
    // }
   
    return (
        <nav className="sticky top-0 right-0 left-0 bg-white dark:bg-slate-900 dark:border-gray-200 text-black dark:text-gray-300 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-8">
                <div className="p-2">
                    <a className="self-center text-2xl whitespace-nowrap" href={'/'}>Strona Główna</a>
                </div>
                <div className="flex items-center space-x-3">
                    <button id="theme-toggle" type="button" onClick={toggleDark} className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                        {/*    Moon icon    */}
                        <svg className="visible fill-black dark:hidden" xmlns="http://www.w3.org/2000/svg" height="16"
                             width="12"
                             viewBox="0 0 384 512">{/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                            <path
                                d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
                        </svg>
                        {/*    Sun icon    */}
                        <svg className="hidden align-middle dark:flex dark:fill-gray-300" xmlns="http://www.w3.org/2000/svg"
                             height="16" width="16"
                             viewBox="0 0 512 512">{/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                            <path
                                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
                        </svg>
                    </button>
                    {/* <Link path={"./products"} name={"Produkty"}/>
                    <Link path={"./two"} name={"Two"}/>
                    <Link path={"./three"} name={"Three"}/> */}
                </div>
            </div>
        </nav>
    )
}