import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from './pages/ProductList';
import Layout from './components/Layout';
import './assets/styles/App.css'

// type ImageType = {
//     src: string;
//     alt?: string;
// }

function App() {
    //const [count, setCount] = useState(0)
    document.body.classList.add('bg-gray-100', 'dark:bg-slate-700');
    // const imageSources = [
    //     {
    //         src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    //         alt: "pierwsze zdjecie"
    //     },
    //     {
    //         src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    //         alt: 'drugie'
    //     },
    //     {
    //         src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    //     },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', },
    //     { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
    // ];
    return (
        <BrowserRouter>
            <Routes>
                {/* to na dole to jest layout*/}
                <Route path="/" element={
                    <Layout>
                        <ProductList />
                    </Layout>
                }>
                <Route path="products" element={<ProductList />} />
                    {/* na dole jest nasza strona główna. Nasz indeks */}
                    {/* <Route path="product" element={<ProductList />} /> */}
                {/* jesli nie znajdzie adnej z powyzszych wywali 404 */}
                <Route path="*" element={<div> nie ma strony</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
