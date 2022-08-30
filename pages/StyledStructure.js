import styled from 'styled-components'

export const StyledStructure = styled.div`
    display: flex ;
    position: relative;

    section {
        margin-bottom: 1rem;
    }

    .hello {
        font-size: 2rem;
        font-weight: 300;
    }

    .moods {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-top: 1rem;
    }

    .profile-infos {
        display: flex;
        margin-bottom: 1rem;
    }

    .profile-ratings {
        display: flex;
    }

    .fortune-cookie {
        display: flex;
        margin: 1rem 0;
    }

    .fortune-cookie > h5 {
        font-weight: 300;
    }

    .fortune-cookie p {
        margin-left: .5rem;
        font-weight: 500;
        font-style: italic;
    }

    .friend-thumbs {
        display: flex;
        flex-wrap: wrap;
    }

    .community-thumbs {
        display: flex;
        flex-wrap: wrap;
    }

    .area-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .area-title a {
        font-size: .8rem;
    }
`