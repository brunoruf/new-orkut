import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 2rem;
    background: #FFF;
    box-shadow: 0px 4px 15px -3px rgba(0,0,0,0.01);

    .header-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1232px;
    }

    .logo-search {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .logo-search > img {
        width: 2.5rem;
        height: auto;
    }

    .logo-search > input {
        width: 30rem;
    }
`