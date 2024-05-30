import { useEffect, useState } from "react";
import Image from "../components/Image";


export default () => {
    //logika nizej

    const [products, setProducts] = useState<any>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (ten plik na którym jesteśmy) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (products === undefined) {
            fetch('http://localhost:3000/api/image')
                .then(res => res.json())

                .then((res) => {
                    console.log(res)
                    setProducts(res); //zapisujemy w zmiennej products. Zwróci tablice tylko z product z backend

                });
        }
    }, [products]);//jakie wartości będą nasłuchiwane

    return (
            <div className='flex justify-center'>
                <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
                {
                    products?.map((product: any) =>
                        // Opakowujemy komponent Image tagiem <a>, aby stał się linkiem i w adresie url doklejał ID produktu. Cała strona zostanie przładowana
                        <a href={'/products/' + product._id}>
                            <Image 
                                key={product._id}
                                imageSrc={product.imageBase64}
                                imageAlt={product.title}
                            />
                        </a>
                    )
                }
                {console.log(products)}
                </div>
            </div>
       
    )
}