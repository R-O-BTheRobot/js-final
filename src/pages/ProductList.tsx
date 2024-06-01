import { useEffect, useState } from "react";
import ImageThumb from "../components/ImageThumb.tsx";

export default function ProductList() {
    //logika nizej

    const [images, setImages] = useState<any>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (images === undefined) {
            fetch('http://localhost:3000/api/image')
                .then(res => res.json())

                .then((res) => {
                    console.log(res)
                    setImages(res); //zapisujemy w zmiennej images. Zwróci tablice tylko z product z backend

                });
        }
    }, [images]);//jakie wartości będą nasłuchiwane

    return (
            <div className='flex justify-center'>
                <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
                {
                    images?.map((product: any) =>
                        // Opakowujemy komponent Image tagiem <a>, aby stał się linkiem i w adresie url doklejał ID produktu. Cała strona zostanie przładowana
                        <a href={'/image/' + product._id}>
                            <ImageThumb
                                key={product._id}
                                imageSrc={product.imageBase64}
                                imageAlt={product.title}
                            />
                        </a>
                    )
                }
                {console.log(images)}
                </div>
            </div>
       
    )
}