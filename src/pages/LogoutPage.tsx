import { useNavigate } from "react-router-dom";

export default () => {

    let navigate = useNavigate();
    const handleLogout = () => {       

        
        localStorage.removeItem('token')
        navigate('/login');

    }

    return (
        <div className="flex flex-col gap-2">

            <h1 className="text-center">Czy na pewno chcesz się wylogować?</h1>
            <button onClick={() => handleLogout()} className="dark:text-black">Tak, na pewno</button>

        </div>
    )
}