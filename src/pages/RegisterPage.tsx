import { useState } from "react";
import { useNavigate } from "react-router-dom";

type RegisterModel = {
    name: string,
    email: string,
    password: string,
}

export default () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Walidacja wprowadzonych wartości do pól w formularzu
        const isValid = ((password === confirmPassword) && (password.length >= 4));
        
        if(!isValid) {
            alert('Pola nie są poprawnie wypełnione!');
            return;
        } else {
           
            const data: RegisterModel = {
                name: username,
                email: email,
                password: password,
            }

            fetch('http://localhost:3000/api/register', {
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
                alert('Rejestracja się powiodła');
                navigate('/');
            });
        }
    }

    return (
        <div className="text-red-950 dark:text-white p-8">
            <p className="mb-4 text-2xl">Rejestracja</p>
            {/* tu na dole bedzie funkcja która nam się odpali gdy wprowadzimy dane */}
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <label htmlFor="username">Nazwa użytkownika</label>
                <input className="dark:text-black px-2 py-1" type="text" id="username" name="username"
                    value={username}
                    onInput={(event: any) => setUsername(event.target.value)}
                    required />

                <label htmlFor="email">Email</label>
                <input className="dark:text-black px-2 py-1" type="email" id="email" name="email"
                    value={email}
                    onInput={(event: any) => setEmail(event.target.value)}
                    required />

                <label htmlFor="password">Hasło</label>
                <input className="dark:text-black px-2 py-1" type="password" id="password" name="password" 
                    value={password} 
                    onInput={(event: any) => setPassword(event.target.value)} 
                    required />

                <label htmlFor="confirmPassword">Hasło ponownie</label>
                <input className="dark:text-black px-2 py-1" type="password" id="confirmPassword" name="confirmPassword" 
                    value={confirmPassword} 
                    onInput={(event: any) => setConfirmPassword(event.target.value)} 
                    required />

                <input type="submit" value="Zarejestruj się" />
            </form>
        </div>
    )
}