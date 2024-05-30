/* import Image from "./ImageThumb.tsx"; */
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function UploadPopup({onClick}: {onClick:()=>void}) {
    const [showUploadDiv, toggleUploadDiv] = useState(true);

    const navigate = useNavigate();

    const getBase64 = (file: Blob) => {
        return new Promise(resolve => {
            let baseURL:string|ArrayBuffer|null = "";
            // Make new FileReader
            const reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = (e: FileList|undefined) => {
        console.log(e.target.files[0]);

        const file = e.target.files[0];

        getBase64(file)
            .then(result => {
                file["base64"] = result;
                console.log("File Is", file);
                (document.querySelector('#imageBase64') as HTMLInputElement).value = file["base64"];
                toggleUploadDiv(!showUploadDiv);
            })
            .catch(err => {
                console.log(err);
            });
    };

    let uploadDiv = <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file"
               className="flex flex-col items-center justify-center w-96 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                    className="font-semibold">Kliknij aby przesłać</span> albo upuść plik</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileInputChange}/>
        </label>
    </div>;

    if(!showUploadDiv){
        uploadDiv = <div className={"flex justify-center items-center w-full"}>
            <img className="max-h-[50rem] max-w-3xl rounded-lg"
                 src={(document.querySelector('#imageBase64') as HTMLInputElement).value} alt={'Zdjęcie do przesłania'}/>
        </div>;
    }

    function handleSubmit(event){
        event.preventDefault();
        const imageBase64 = (document.querySelector('#imageBase64') as HTMLInputElement).value;
        const userId = (document.querySelector('#userId') as HTMLInputElement).value;
        const description = (document.querySelector('#description') as HTMLInputElement).value;
        const title = (document.querySelector('#title') as HTMLInputElement).value;
        fetch('http://localhost:3000/api/upload', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "imageBase64": imageBase64,
                "userId": userId,
                "description": description,
                "title": title
            })
        })
            .then(response => response.json())
            .then((id) => {
                console.log(id);
                toggleUploadDiv(true);
                onClick();
                navigate("/image/"+id, );
            });
    }

    return (
        <>
            {uploadDiv}
            <form method="POST" onSubmit={handleSubmit}>
                <div className={'flex flex-col'}>
                    <input type='hidden'
                           id={'imageBase64'}
                           name={'imageBase64'}/>
                    <input type='hidden'
                           id={'userId'}
                           value={'1'}
                           name={'userId'}/>

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