import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
//import Layout from './components/Layout';
import './App.css';
import Navbar from "./components/Navbar.tsx";

interface IImage {
    _id: string,
    userId: string,
    title: string,
    imageBase64: string,
    description: string|undefined
}

function App() {
    //const [count, setCount] = useState(0)
    document.body.classList.add('bg-gray-100', 'dark:bg-slate-700');
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* to na dole to jest layout*/}
                <Route path="/" element={<ProductList />}/>
                {/* :id - nawa parametru, przechwyytujemy przy pomocy useParams() */}
                {<Route path="/image/:id" element={<ProductDetails />} />/*  */}
                    {/* na dole jest nasza strona główna. Nasz indeks */}
                    {/* <Route path="product" element={<ProductList />} /> */}
                <Route path="/upload" element={<ProductList />}/>
                {/* jesli nie znajdzie adnej z powyzszych wywali 404 */}
                <Route path="*" element={<div> nie ma strony</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
