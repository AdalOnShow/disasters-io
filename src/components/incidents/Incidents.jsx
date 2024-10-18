import Heading from "../common/Heading.jsx";
import HeadingButtons from "../common/HeadingButtons.jsx";
import { NavLink } from "react-router-dom";
import { Button1 } from "../common/Buttons.jsx";
import Cards from "../common/Cards.jsx";

const Incidents = () => {
    return (
        <section>
            <Heading upTitle="Home - Incidents" title="Incidents">
                <HeadingButtons >
                    <NavLink to={"/incidents/new-incident"}>
                        <Button1 icon element={"New Incident"} />
                    </NavLink>
                </HeadingButtons>
            </Heading>
            <Cards />
        </section>
    )
}
export default Incidents
