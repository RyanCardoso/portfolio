// Libs
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

export const Title = styled.h1`
    position: relative;
    max-width: 1000px;
    width: 80%;
    color: #FFF;
    font-size: 10rem;
    line-height: 0.9em;
    letter-spacing: 2px;
    transform: rotate(-28deg) skew(25deg);
    text-transform: capitalize;
    text-shadow: ${({ textShadow }) => textShadow};

    :before {
        content: ' ${({ content }) => content} ';
        position: absolute;
        top: 30px;
        left: -30px;
        color: rgba(255,248,131,0.3);
        text-shadow: none;
        filter: blur(8px);
        z-index: -1;
    }
`;