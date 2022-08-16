import styled from 'styled-components'

export const StyledCommunityThumb = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: .4rem 0;
    align-items: center;

    > span {
        background: url("https://epipoca.com.br/wp-content/uploads/2022/08/samuel-l-jackson-garfield.jpg");
        background-repeat: no-repeat;
        background-size: cover;
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