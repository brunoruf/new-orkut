import { Children } from "react";
import Tab from "../tab/Tab";

import TextField from "../TextField/TextField";
import { StyledNewAction } from "./StyledNewAction";


const NewAction = ({children}) => {
    return (
        <StyledNewAction>
                <h2>What do you wanna do today?</h2>
                <div className="split-line"></div>
                <div className="tabs">
                    <Tab name="Create a Community" active="active"/>
                    <Tab name="Write a Testimonial"/>
                    <Tab name="Leave a Scrap"/>
                </div>
                <TextField placeholder="Give a name to you new community"/>
        </StyledNewAction>
    )
}

export default NewAction;
