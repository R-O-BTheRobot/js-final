
import { ReactNode } from 'react';

type PopupState = {
    open: boolean,
}

type PopupProps = {
    children: ReactNode,
    state: PopupState,
    onClick: () => void,
}

export default function Popup({children, state, onClick}: PopupProps) {
    if (state.open) return (
        <>
            <div className="h-screen w-screen bg-slate-700 opacity-50 absolute top-0 left-0 z-10" onClick={() => {
                //toggleUploadDiv(true);
                onClick();
            }}/>
            <div className="h-max w-max p-5 bg-white text-slate-600 dark:bg-slate-800 dark:text-slate-100  absolute top-0 left-0 right-0 bottom-0 m-auto z-20 rounded-xl">
                {children}
            </div>
        </>
    );


}