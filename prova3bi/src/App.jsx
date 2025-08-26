import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import Animais from "./Paginas/Animais";
import Dinheiro from "./Paginas/Dinheiro";
import Futebol from "./Paginas/Futebol";
import Mulher from "./Paginas/Mulher";
import "./App.css"
export default function App()
{
    return (
        <div>
            <h1>Estudo CSS</h1>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="a" element={<Animais />} />
            <Route path="d" element={<Dinheiro/>} />
            <Route path="f" element={<Futebol />} />
            <Route path="m" element={<Mulher />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}