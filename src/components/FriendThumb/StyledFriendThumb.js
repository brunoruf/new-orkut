import styled from 'styled-components'

export const StyledFriendThumb = styled.div`
    width: 100%;
    max-width: 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 50px;
    padding: .75rem;

    > img {
        display:block ;
        border-radius: 8rem;
        width: 3.5rem;
        border-radius: 8rem;
        margin-right: 1rem;
        opacity: .8;
        margin: 0 auto;
    }

    > a {
        margin-top: .5rem;
        font-size: .75rem;
        text-align: center;
    }
`