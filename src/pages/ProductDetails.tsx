import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";

export default () => {
    const { id } = useParams();

    const [product, setProduct] = useState<any>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (product === undefined) {
            fetch('https://dummyjson.com/products/' + id)
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
        <div className='flex justify-center flex-col'>
            <h1 className="text-sky-600 py-8 px-9">{product.title}</h1>
            <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
            {
                product.images.map((image: any) =>
                    <Image
                        key={image}
                        imageSrc={image}
                        imageAlt={product.category}
                    />
                )
            }
            {/* <Image imageSrc={product.images[0]} imageAlt={product.category} /> */}
            </div>
        </div>
    )
    
}