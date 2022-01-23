import "./App.css";

import { Navbar } from "./Components/Navbar";
import { MobileNavbar } from "./Components/MobileNavbar";

import { About } from "./Views/About";
import { Skills } from "./Views/Skills";
import { Portfolio } from "./Views/Portfolio";
import { Contact } from "./Views/Contact";

import { useWindowSize } from "./hooks/useWindowSize";

function App() {
    const screenSize = useWindowSize().width;

    return (
        <div className="App bg-nightBlue-500 min-h-screen">
            {screenSize && screenSize < 640 ? <MobileNavbar /> : <Navbar />}
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
