import ConfigArea from "../ConfigArea/ConfigArea";
import TextField from "../TextField/TextField";
import { StyledHeader } from "./StyledHeader";


const Header = ({userImage}) => {
    return (
        <StyledHeader>
            <div className="header-container">
                <div className="logo-search">
                    <img src={"../../images/orkut-logo.png"} />
                    <TextField placeholder="Search anything" />
                </div>
                <ConfigArea userImage={userImage} />
            </div>
        </StyledHeader>
    )
}


export default Header;
