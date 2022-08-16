import { StyledMain } from "./StyledConfigArea";
import { StyledConfigArea } from "./StyledConfigArea"

const ConfigArea = ({userImage}) => {
    return (
        <StyledConfigArea>
            <div className="profile">
                <img src={userImage} alt="" className="profile-image"/>
                <p>Bruno Ruf</p>
            </div>
        </StyledConfigArea>
    )
}

export default ConfigArea;
