import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
//import Layout from './components/Layout';
import './App.css';
import Navbar from "./components/Navbar.tsx";
import Error from "./components/Error.tsx";

function App() {
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
                <Route path="/error/:msg" element={<Error/>} />
                <Route path="*" element={<Error errorMsg={"Nie ma takiej strony"}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
