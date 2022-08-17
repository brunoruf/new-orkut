import { StyledCommunityThumb } from "./StyledCommunityThumb";

const CommunityThumb = ({name, image}) => {
    return (
        <StyledCommunityThumb>
            <span style={{background:`url('${image}')`}}/>
            <a>{name}</a>
        </StyledCommunityThumb>
    )
}

export default CommunityThumb;
