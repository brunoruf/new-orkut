import { StyledTab } from "./StyledTab";

const Tab = ({name, active}) => {
    return (
        <StyledTab className={active}>{name}</StyledTab>
    )
}

export default Tab;