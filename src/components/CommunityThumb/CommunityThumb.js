import { StyledCommunityThumb } from "./StyledCommunityThumb";

const CommunityThumb = ({name}) => {
    return (
        <StyledCommunityThumb>
            <span />
            <a>{name}</a>
        </StyledCommunityThumb>
    )
}

export default CommunityThumb;
