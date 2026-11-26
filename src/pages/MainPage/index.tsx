import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main"

export const MainPage = () => {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}