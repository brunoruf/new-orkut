import styled from 'styled-components'

export const StyledCommunityThumb = styled.div`
    display: flex;
    padding: .4rem 0;
    align-items: center;
    max-width: 100%;

    > span {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: .4rem;
        width: 5rem;
        min-width: 5rem;
        height: 3.5rem;
        opacity: .8;
    }

    > p {
        display:flex ;
        align-items: center;
        height: 3.5rem;
        margin-left: 1rem;
        font-size: .85rem;
        overflow: hidden;
    }
`