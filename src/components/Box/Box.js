import { StyledBox } from "./StyledBox";

const Box = ({children}) => {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}

export default Box;
