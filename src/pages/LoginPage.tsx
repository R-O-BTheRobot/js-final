export default () => {
    return (
        <div className="text-red-950 p-8">
            <h2 className="mb-4">Logowanie</h2>
            {/* tu na dole bedzie funkcja która nam się odpali gdy wprowadzimy dane */}
            <form className="flex flex-col gap-2" action="/login">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required />

                <label htmlFor="password">Hasło</label>
                <input type="password" id="password" name="password" required />

                <input type="submit" value="Zaloguj się" />
            </form>
        </div>
    )
}