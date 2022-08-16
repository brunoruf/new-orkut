import styled from 'styled-components'

export const StyledSidebar = styled.aside`
    position: relative;
    width: 15rem;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    font-size: .9rem;
    font-weight: 300;
    box-shadow: inset -11px 0px 11px -7px rgba(0,0,0,0.08);
    color: #706b81;
    background: #f2f2f5;;
    display: none;

    ul {
        width: 100%;
    }

    li {
        display: flex;
        align-items: center;
        padding: 1.5rem 2rem;
        height: 3.2rem;
    }

    li > img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 .5rem 0 0;
    }

    li.active{
        width: 100%;
        font-weight: 600;
        background: #fafafc;
        border-left: 4px solid #d744b6;
    }

    @media(min-width: 860px) {
        display: block;
}
`

