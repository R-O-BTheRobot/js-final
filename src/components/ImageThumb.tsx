//zadeklarowanie typu
type ImageProps = {
    imageSrc: string;
    imageAlt?: string;//albo bedzie string jesli cos przekaze albo underfind jesli nic nie przekze
}

//ImageProps to jest zadeklarowanie typu który sobie sami skonstuujemy
export default function ImageThumb({imageSrc, imageAlt }: ImageProps) {return(
    <div className={"flex justify-center items-center w-72 h-72 overflow-hidden rounded-lg"}>
        <img className="max-w-full"
             src={imageSrc} alt={imageAlt}/>
    </div>
)}//robimy dynamiczny komponent

// props.imageSrc; Wypakowujemy więc bierzemy { imageSrc }. To jest taka zajebista właściwość 