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
import DistritoFederal from "./Paginas/DistritoFederal";
import Alagoas from "./Paginas/Alagoas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import Maranhao from "./Paginas/Maranhao";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandedoNorte from "./Paginas/RioGrandeNorte";
import Sergipe from "./Paginas/Sergipe";
import Acre from "./Paginas/Acre";
import Amapa from "./Paginas/Amapa";
import Para from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";
import Amazonia from "./Paginas/Amazonia";

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
            <Route path="/df" element={< DistritoFederal/>} />
            <Route path="/AL" element={<Alagoas />} />
            <Route path="/BA" element={<Bahia />} />
            <Route path="/CE" element={<Ceara />} />
            <Route path="/MA" element={<Maranhao />} />
            <Route path="/PB" element={<Paraiba />} />
            <Route path="/PE" element={<Pernambuco />} />
            <Route path="/PI" element={<Piaui />} />
            <Route path="/SE" element={<Sergipe />} />
            <Route path="/RN" element={<RioGrandedoNorte />} />
            <Route path="/ac" element={<Acre />} />
            <Route path="/ap" element={<Amapa />} />
            <Route path="/pa" element={<Para />} />
            <Route path="/ro" element={<Rondonia />} />
            <Route path="/rr" element={<Roraima />} />
            <Route path="/to" element={<Tocantins />} />
            <Route path="/am" element={<Amazonia />} />
           </Routes>
        </BrowserRouter>
    );
}