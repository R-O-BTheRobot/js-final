import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import ImageFull from "../components/ImageFull";

export default function ProductDetails()  {
    const { id } = useParams();

    const navigate = useNavigate();

    interface IImage {
        id: string,
        userId: string,
        title: string,
        imageBase64: string,
        description: string|undefined
    }

    const [image, setImage] = useState<IImage>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        console.debug('ProductDetails - id is: '+id);
        if (image === undefined || image.id != id) {
            console.debug('Image Details are ');
            console.debug(image);
            fetch('http://localhost:3000/api/image/' + id)
                .then(res => res.json())
                .then((res) => {
                    if(!res.errorResponse){
                        setImage(res); //zapisujemy w zmiennej image. Zwróci tablice tylko z image z backend
                        console.debug(res)
                    }
                    else{
                        console.log('Wystąpił błąd!');
                        console.error(res);
                        navigate("/error/"+res.errorResponse.errorMessage);
                    }
                })
                .catch((res)=>{
                    console.log('Wystąpił błąd!');
                    console.error(res);
                    navigate("/error/"+"Błąd serwera");
                });
        }

    }, [id]);//jakie wartości będą nasłuchiwane
    if(!image) {
        navigate("/error/"+"Nie możemy znaleźć twojego obrazka");
    }
    else return (
        <div className='flex justify-center p-2'>

            <ImageFull
                key={image.id}
                imageSrc={image.imageBase64}
                title={image.title}
                description={image.description}
            />
            {}

        </div>
    )

    
}