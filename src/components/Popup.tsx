import {ReactNode} from "react";

export default function Popup({popupState, onClick, children}:{popupState:{open:boolean}, onClick:()=>void, children: ReactNode|undefined}) {

    console.log('popupState is '+popupState.open);
    if (popupState.open) {
        document.body.style.overflow = "hidden"
        return (
            <>
                <div className="min-h-screen w-screen bg-slate-700 opacity-50 fixed top-0 left-0 z-10" onClick={() => {
                    //toggleUploadDiv(true);
                    onClick();
                }}/>
                <div className="h-max w-max p-5 bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-100 fixed top-0 left-0 right-0 bottom-0 m-auto z-20 rounded-xl">
                    {children}
                </div>
            </>
        );
    }
    else{
        document.body.style.overflow = "";
    }
}