//zadeklarowanie typu
import {useState} from "react";
import Popup from "./Popup.tsx";
import EditPopup from "./EditPopup.tsx";
import DeletePopup from "./DeletePopup.tsx";

type ImageProps = {
    imageSrc: string;
    title?: string;
    description: string|undefined;
}

//ImageProps to jest zadeklarowanie typu który sobie sami skonstuujemy
export default function ImageFull({ imageSrc, title, description }: ImageProps) {
    const [editDeletePopupState, setEditDeletePopupState] = useState({ open: false});
    const [editDeletePopupMode, setEditDeletePopupMode] = useState({ mode: ''});

    function toggleUpload(mode?: string) {
        if(mode === undefined) mode = '';
        console.debug(editDeletePopupState.open);
        console.debug(!editDeletePopupState.open);
        setEditDeletePopupState({ open: !editDeletePopupState.open});
        setEditDeletePopupMode({ mode: mode});
        return;
        /*return () => {

        };*/
    }

    return(
    <>
        <Popup popupState={editDeletePopupState} onClick={toggleUpload}>
            {editDeletePopupMode.mode == 'edit' ?
                <EditPopup onClick={toggleUpload}></EditPopup>
            :
                <DeletePopup onClick={toggleUpload}></DeletePopup>
            }
        </Popup>

        <div className={"flex justify-center flex-col w-full text-slate-900 dark:text-slate-100 text-center"}>
            <div className={"flex justify-center items-center h-max"}>
                <img className="rounded-lg"
                     src={imageSrc} alt={title}/>
            </div>
            <h1 className={"mt-2"}>
                {title}
            </h1>
            {
                description ? (
                    <div className={'p-2 text-2xl'}>
                        {description}
                    </div>
                ) : (
                    <></>
                )
            }
            <div className={"p-10"}>
                <button type="button"
                        className={"text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}
                        onClick={()=>{toggleUpload('edit')}}>
                    Edytuj
                </button>
                <button type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={()=>{toggleUpload('delete')}}>
                    Usuń
                </button>
            </div>
        </div>

    </>
)
}//robimy dynamiczny komponent

// props.imageSrc; Wypakowujemy więc bierzemy { imageSrc }. To jest taka zajebista właściwość