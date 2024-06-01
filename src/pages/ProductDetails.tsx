import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageThumb from "../components/ImageThumb";
import { ImageItem } from '../App';

export default () => {
    const { id } = useParams();

    const [image, setImage] = useState<ImageItem>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (image === undefined) {
            fetch('http://localhost:3000/api/image/' + id)
                .then(res => res.json())//wyciągamy tylko json a nie inne informacje bo tylko json nas interesuje
                .then((res) => {
                    setImage(res); //zapisujemy w zmiennej image. Zwróci tablice tylko z image z backend
                    console.log(res)
                });
        }
    }, [image]);//jakie wartości będą nasłuchiwane

    if(image === undefined) {
        return (
            <p>Brak danych</p>
        );
    }

    return (
        <div className='flex justify-center flex-col'>
            <h1 className="text-sky-600 py-8 px-9">{image.title}</h1>
            <p className="text-sky-600 py-4 px-9">{image.description}</p>
            <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
            <ImageThumb
                imageSrc={image.imageBase64}
                imageAlt={image.description}
            />
            {/* <Image imageSrc={image.images[0]} imageAlt={image.category} /> */}
            </div>
        </div>
    )
    
}