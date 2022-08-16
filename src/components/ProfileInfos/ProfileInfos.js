import { StyledProfileInfos } from "./StyledProfileInfos";

const ProfileInfos = ({name, amount, image}) => {
    return (
        <StyledProfileInfos>
            <p>{name}</p>
            <div>
                <img src={image} alt="zaz" />
                <a>{amount}</a>
            </div>
        </StyledProfileInfos>
    )
}

export default ProfileInfos;
