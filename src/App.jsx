import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/common/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Incidents from "./components/incidents/Incidents.jsx";
import NotFound from "./components/NotFound.jsx";
import NewIncident from "./components/incidents/NewIncident.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Dashboard />} />
                    <Route path={"/incidents"} element={<Incidents />} />
                    <Route path={"/incidents/new-incident"} element={<NewIncident />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
