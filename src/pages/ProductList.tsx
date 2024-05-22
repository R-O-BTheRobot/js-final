import { useEffect, useState } from "react";
import Image from "../components/Image";


export default () => {
    //logika nizej

    const [products, setProducts] = useState<any>(); //getter and setter / pobieram i ustawiem
    //wykonywany gdy ten komponent (w naszym przypadku App na górze) zostanie wyswietlony na strony czyli zainicjalizowany lub zmieni się jakaś wartość w useState i use Effect to są Hooki()
    useEffect(() => {
        if (products === undefined) {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                
                .then((res) => {
                    setProducts(res.products); //zapisujemy w zmiennej products. Zwróci tablice tylko z product z backend

                });
        }
    }, [products]);//jakie wartości będą nasłuchiwane

    return (
      
            <div className='flex justify-center'>
                <div className="relative grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 p-2">
                {
                        products?.map((product: any) =>
                            <Image key={product.id} imageSrc={product.images[0]} imageAlt={product.title}/>
                        )
                    }
                </div>
            </div>
       
    )
}