import {useNavigate} from "react-router-dom";
import {FormEvent} from "react";

export default function EditPopup({onClick}: {onClick:()=>void}) {

    const navigate = useNavigate();

    function handleSubmit(event : FormEvent){
        event.preventDefault();
        const id = window.location.pathname.split('/').slice(-1)[0];
        const description = (document.querySelector('#description') as HTMLInputElement).value;
        const title = (document.querySelector('#title') as HTMLInputElement).value;
        fetch('http://localhost:3000/api/upload', {
            method: 'patch',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "id": id,
                "description": description,
                "title": title
            })
        })
            .then(response => response.json())
            .then((id) => {
                console.log(id);
                onClick();
                navigate("/image/"+id, );
            });
    }

    return (
        <>
            <form method="POST" onSubmit={handleSubmit}>
                <div className={'flex flex-col'}>
                    <label htmlFor={'title'} className={'mt-2'}>Tytuł zdjęcia</label>
                    <input type='text'
                           name={'title'}
                           id={'title'}
                           className={'z-20 form-textarea dark:bg-gray-700 rounded border-slate-400 dark:border-gray-600 mt-2'}
                           placeholder={'Wakacje Gdańsk'}/>

                    <label htmlFor={'description'} className={'mt-2'}>Opis zdjęcia (opcjonalny)</label>
                    <textarea name={'description'}
                              id={'description'}
                              className={'z-20 form-textarea dark:bg-gray-700 rounded border-slate-400 dark:border-gray-600 mt-2'}
                              placeholder={'Zdjęcie grupowe przed fontanną'}/>
                    <button type={'submit'}
                            className={"text-white mt-2 bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>
                        Prześlij
                    </button>
                </div>
            </form>
        </>
    );
}