import styled from 'styled-components'

export const StyledCommunityThumb = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: .4rem 0;
    align-items: center;

    > span {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: .4rem;
        width: 5rem;
        height: 3.5rem;
        opacity: .8;
    }

    > a {
        margin-left: 1rem;
        font-size: .85rem;
        text-align: center;
    }
`