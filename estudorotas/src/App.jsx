import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioGrandeSul from "./Paginas/RioGrandeSul";
import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import Goias from "./Paginas/Goias";
import "./App.css"
export default function App()
{
    return (
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sp" element={<SaoPaulo />} />
            <Route path="/rj" element={<RioJaneiro />} />
            <Route path="/mg" element={<MinasGerais />} />
            <Route path="/es" element={<EspiritoSanto />} />
            <Route path="/rs" element={<RioGrandeSul />} />
            <Route path="/sc" element={<SantaCatarina />} />
            <Route path="/pr" element={<Parana />} />
            <Route path="/mt" element={<MatoGrosso />} />
            <Route path="/ms" element={<MatoGrossoSul />} />
            <Route path="/go" element={< Goias/>} />
           </Routes>
        </BrowserRouter>
    );
}