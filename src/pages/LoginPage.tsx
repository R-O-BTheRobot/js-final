import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginModel = {
    email: string,
    password: string
}

export default () => {

    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const data: LoginModel = {
            email: email,
            password: password,
        }

        fetch('http://localhost:3000/api/login', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(res => res.json())//wyciągamy tylko json nic wiecej
            .then(res => {
                localStorage.setItem('token', res.token);
                alert('Logowanie się powiodło');
                navigate('/');
            });
    }

    return (
        <div className="text-red-950 dark:text-white p-8">
            <p className="mb-4 text-2xl">Logowanie</p>
            {/* tu na dole bedzie funkcja która nam się odpali gdy wprowadzimy dane */}
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="dark:text-black px-2 py-1" type="text" id="email" name="email" required
                    value={email}
                    onInput={(event: any) => setEmail(event.target.value)}
                />

                <label htmlFor="password">Hasło</label>
                <input className="dark:text-black px-2 py-1" type="password" id="password" name="password" required
                    value={password}
                    onInput={(event: any) => setPassword(event.target.value)} />

                <input type="submit" value="Zaloguj się" />
            </form>
        </div>
    )
}