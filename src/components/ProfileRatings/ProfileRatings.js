import { StyledProfileRatings } from "./StyledProfileRatings";

const ProfileRatings = ({name, image}) => {
    return (
        <StyledProfileRatings>
            <p>{name}</p>
            <div>
                <img src={image} alt="zaz" />
                <img src={image} alt="zaz" />
                <img src={image} alt="zaz" />
            </div>
        </StyledProfileRatings>
    )
}

export default ProfileRatings;