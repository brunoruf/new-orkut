import styled from 'styled-components'

export const StyledMain = styled.main`

    width: 100%;
    grid-gap: 1.5rem;
    padding: 1.5rem ;


    @media(min-width: 860px) {
        display: grid ;
        width: 100%;
        max-width: 1000px;
        grid-template-areas: "welcomeArea profileRelationsArea";
        grid-template-columns: 2fr 1fr;
    }
`