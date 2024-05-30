import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageFull from "../components/ImageFull";

export default function ProductDetails()  {
    const { id } = useParams();

    const [image, setImage] = useState<IImage>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        console.log('ProductDetails - id is: '+id);
        if (image === undefined || image._id != id) {
            fetch('http://localhost:3000/api/image/' + id)
                .then(res => res.json())

                .then((res) => {
                    setImage(res); //zapisujemy w zmiennej image. Zwróci tablice tylko z image z backend
                    console.log(res)
                });
        }
    }, [image, id]);//jakie wartości będą nasłuchiwane

    if(image === undefined) {
        return (
            <p>Brak danych</p>
        );
    }
    else{
        return (
            <div className='flex justify-center p-2'>

                <ImageFull
                    key={image._id}
                    imageSrc={image.imageBase64}
                    title={image.title}
                    description={image.description}
                />
                {}

            </div>
        )
    }
    
}