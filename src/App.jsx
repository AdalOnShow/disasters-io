import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./components/common/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Incidents from "./components/incidents/Incidents.jsx";
import NotFound from "./components/NotFound.jsx";
import NewIncident from "./components/incidents/NewIncident.jsx";
import Step1 from "./components/incidents/Step-1.jsx";
import Step2 from "./components/incidents/Step-2.jsx";
import Step3 from "./components/incidents/Step-3.jsx";
import Locations from "./components/Locations.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Dashboard />} />
                    <Route path={"/incidents"} element={<Incidents />} />
                    <Route path={"/incidents/new-incident"} element={<NewIncident />} />
                    <Route path={"/incidents/new-incident/step-1"} element={<Step1 />} />
                    <Route path={"/incidents/new-incident/step-2"} element={<Step2 />} />
                    <Route path={"/incidents/new-incident/step-3"} element={<Step3 />} />
                    <Route path={"/locations"} element={<Locations />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
