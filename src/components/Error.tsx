import {useParams} from "react-router-dom";

export default function Error({errorMsg}: {errorMsg?: string}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const error = useParams().msg;
    console.log(error)
    if (!errorMsg) errorMsg = error;

    return (
        <section className=" h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-900 dark:text-white">Ups...</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Stało się coś nieoczekiwanego</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{!errorMsg ? '' : errorMsg}</p>
                    <a href="/"
                       className="inline-flex text-slate-900 dark:text-white bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                        Strona główna</a>
                </div>
            </div>
        </section>
    );
}