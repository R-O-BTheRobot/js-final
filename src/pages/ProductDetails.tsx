import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";

export default () => {
    const { id } = useParams();

    const [product, setProduct] = useState<any>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (product === undefined) {
            fetch('http://localhost:3000/api/image/' + id)
                .then(res => res.json())

                .then((res) => {
                    setProduct(res); //zapisujemy w zmiennej product. Zwróci tablice tylko z product z backend
                    console.log(res)
                });
        }
    }, [product]);//jakie wartości będą nasłuchiwane

    if(product === undefined) {
        return (
            <p>Brak danych</p>
        );
    }

    return (
        <div className='flex justify-center'>

            <Image
                key={product._id}
                imageSrc={product.imageBase64}
                imageAlt={product.title}
            />
            {/* <Image imageSrc={product.images[0]} imageAlt={product.category} /> */}

        </div>
    )
    
}