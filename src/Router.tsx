import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

//a pagina principal pode ser a home que no caso seria a tela de login
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
    </Routes>
  )//a pagina event é a rota que está a chamar de pages event a pagina que construimos, portanto para visualisar colocar /event
}