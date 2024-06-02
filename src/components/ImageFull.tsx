//zadeklarowanie typu
type ImageProps = {
    imageSrc: string;
    title?: string;
    description: string|undefined;
}

//ImageProps to jest zadeklarowanie typu który sobie sami skonstuujemy
export default function ImageFull({ imageSrc, title, description }: ImageProps) {return(
    <>
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
        </div>

    </>
)}//robimy dynamiczny komponent

// props.imageSrc; Wypakowujemy więc bierzemy { imageSrc }. To jest taka zajebista właściwość