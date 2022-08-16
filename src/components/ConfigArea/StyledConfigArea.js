import styled from 'styled-components'

export const StyledConfigArea = styled.div`
    display: flex;
    .profile {
            display: none ;
        }

        .profile-image {
            display: none;
        }


    @media(min-width: 860px) {
        .profile {
            display: flex ;
            justify-content: center;
            align-items: center;
        }

        .profile-image {
            display: flex ;
            width: 3rem;
            border-radius: 8rem;
            margin-right: 1rem;
            opacity: .8;
        }
    }
`