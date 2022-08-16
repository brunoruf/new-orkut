import { StyledFriendThumb } from "./StyledFriendThumb";

const FriendThumb = ({name}) => {
    return (
        <StyledFriendThumb>
            <img src="http://github.com/brunoruf.png" alt="zaz" />
            <a>{name}</a>
        </StyledFriendThumb>
    )
}

export default FriendThumb;
