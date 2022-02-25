import './App.scss'
import {Header} from "./components/layout/header/header"
import {Footer} from "./components/layout/footer/footer"
import {AppRoutes} from "./components/appRoutes"

function App() {
    return (
        <div className="app">
            <Header/>
            <div className="app__content">
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
