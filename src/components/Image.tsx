//zadeklarowanie typu
type ImageProps = {
    imageSrc: string;
    imageAlt?: string;//albo bedzie string jesli cos przekaze albo underfind jesli nic nie przekze
}

//ImageProps to jest zadeklarowanie typu który sobie sami skonstuujemy
export default ({ imageSrc, imageAlt }: ImageProps) => (
    <div>
        <img className="h-auto max-w-full rounded-lg"
            src={imageSrc} alt={imageAlt} />
    </div>
)//robimy dynamiczny komponent

// props.imageSrc; Wypakowujemy więc bierzemy { imageSrc }. To jest taka zajebista właściwość 