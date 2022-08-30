import { StyledCommunityThumb } from "./StyledCommunityThumb";

const CommunityThumb = ({name, image}) => {
    return (
        <StyledCommunityThumb>
            <span style={{backgroundColor:'#CCC', background:`url('${image}')`, backgroundSize:"cover", backgroundPosition:"center"}}/>
            <p>{name}</p>
        </StyledCommunityThumb>
    )
}

export default CommunityThumb;
