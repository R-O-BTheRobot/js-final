export default function Popup({popupState, onClick}: {popupState:{open:boolean}, onClick:()=>void}) {
    let getBase64 = (file: Blob) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL:string|ArrayBuffer|null = "";
            // Make new FileReader
            let reader = new FileReader();

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
            console.log(fileInfo);
        });
    };

    let handleFileInputChange = (e: any) => {
        console.log(e.target.files[0]);

        let file = e.target.files[0];

        getBase64(file)
            .then(result => {
                file["base64"] = result;
                console.log("File Is", file);
                (document.querySelector('#imageBase64') as HTMLInputElement).value = file["base64"];
            })
            .catch(err => {
                console.log(err);
            });
    };
    if (popupState.open === true) return (
        <>
            <div className="h-screen w-screen bg-slate-700 opacity-50 absolute top-0 left-0 z-10" onClick={onClick} />
            <div className="h-max w-max p-5 bg-white absolute top-0 left-0 right-0 bottom-0 m-auto z-20 rounded-xl" onClick={()=>{}}>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file"
                           className="flex flex-col items-center justify-center w-96 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                className="font-semibold">Kliknij aby przesłać</span> albo upuść plik</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileInputChange}/>
                    </label>
                </div>
                <form method="POST" action="http://localhost:3000/api/upload">
                    <div className={'flex flex-col'}>
                        <input type='hidden'
                               id={'imageBase64'}
                               name={'imageBase64'}/>
                        <input type='hidden'
                               id={'userId'}
                               value={'1'}
                               name={'userId'}/>

                        <label htmlFor={'title'} className={'text-slate-600 mt-2'}>Tytuł zdjęcia</label>
                        <input type='text'
                               name={'title'}
                               className={'z-20 text-slate-900 form-textarea rounded border-slate-400 mt-2'}
                               placeholder={'Wakacje Gdańsk'}/>

                        <label htmlFor={'description'} className={'text-slate-600 mt-2'}>Opis zdjęcia</label>
                        <textarea name={'description'}
                                  className={'z-20 text-slate-900 form-textarea rounded border-slate-400 mt-2'}
                                  placeholder={'Zdjęcie grupowe przed fontanną'}/>
                        <button type={'submit'}
                                className={"text-white mt-2 bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}>
                            Prześlij
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}