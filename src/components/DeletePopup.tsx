import {useNavigate} from "react-router-dom";
import {FormEvent} from "react";

export default function DeletePopup({onClick}: {onClick:()=>void}) {

    const navigate = useNavigate();


    function handleSubmit(event : FormEvent){
        event.preventDefault();
        const id = window.location.pathname.split('/').slice(-1)[0];
        fetch('http://localhost:3000/api/delete', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "id": id
            })
        })
            .then(response => response.json())
            .then((res) => {
                onClick();
                if(!res.errorResponse){
                    console.debug(id);
                    navigate("/");
                }
                else{
                    console.log('Wystąpił błąd!');
                    console.error(res);
                    navigate("/error/"+res.errorResponse.errorMessage);
                }
            }).catch((res)=>{
                console.log('Wystąpił błąd!');
                console.error(res);
                onClick();
                navigate("/error/"+"Błąd serwera");
            });
    }

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <div className={'flex flex-col'}>
                    <div className={"p-2 text-slate-900 dark:text-white"}>
                        Zamierzasz <b>PERMANENTNIE</b> usunąć zdjęcie ze swojej galerii.
                        <br/>Czy napewno chcesz kontynuować?
                    </div>
                    <button type={'submit'}
                            className={"text-white mt-2 bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>
                        Prześlij
                    </button>
                </div>
            </form>
        </>
    );
}