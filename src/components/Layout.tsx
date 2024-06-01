import Navbar from "../components/Navbar"

export default ({children}: any) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )


    // <Layout> tu jest  nasz chealdrne</Layout>
}