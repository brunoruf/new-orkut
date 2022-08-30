import { StyledFriendThumb } from "./StyledFriendThumb";

const FriendThumb = ({name}) => {
    return (
        <StyledFriendThumb>
            <a>
                <img src="http://github.com/brunoruf.png" alt="zaz" />
                <p>{name}</p>
            </a>
        </StyledFriendThumb>
    )
}

export default FriendThumb;
