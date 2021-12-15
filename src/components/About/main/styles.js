// Libs 
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const BoxTitle = styled.div`
    flex: 1;

    h1 {
        width: 50%;
        padding-left: 5rem;
        font-size: 4.5rem;
        text-transform: uppercase;
    }

    h2 {        
        padding-left: 5rem;
        font-size: 2.5rem;
        text-transform: uppercase;

        ::before {
            content: '';
            margin: 2rem 0;
            display: flex;
            max-width: 380px;
            width: 100%;
            height: .5rem;
            background: #3F8FD6;
        }
    }
`

export const BoxImg = styled.figure`
    min-width: 300px;
    height: 300px;
    margin-bottom: 2.5rem;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 2rem 2rem 0 .1rem #3F8FD6;
    }    
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    padding: 64px 32px;
    margin-top: 8rem;
    border-radius: 16px;
    background: #3F8FD6;

    p {
        font-size: 1.5rem;
    }

    ::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 10%;  
        border-width: 1.5rem;
        border-style: solid;
        border-color: transparent transparent #3F8FD6 transparent;
    }
`