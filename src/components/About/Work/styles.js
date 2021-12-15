// Libs 
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    margin-top: 8rem;
`;

export const Title = styled.h2`
    font-size: 3rem;
    text-align: center;
`;  

export const CardsWork = styled.div`
    width: 100%;
    position: relative;
    margin-top: 8rem;
`;

export const BoxWork = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 50%;
    padding: 2rem 5rem 2rem 0;
    margin: 2rem 0;

    :nth-child(even) {
        float: right;
        justify-content: flex-start;
        padding-left: 5rem;
        
        div:last-child {
            left: 0;
        }

        .boxBar {
            p {
                left: -4rem;
                transform: translateY(-50%) rotate(270deg);
            }
        }
    }

    :last-child {
        .boxBar {
            ::before {
                background: green;
            }
        }
    }
`;

export const BoxLogo = styled.figure`
    width: 100px;
    margin-right: 1rem;

    img {
        width: 100%;
    }
`
export const Content = styled.div`
    h4 {
        margin: .2rem 0;
    }
`

export const BoxBar = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    display: flex;
    height: 100%;
    border: dashed rgb(63, 142, 214, 0.5);

    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        display: flex;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #3F8FD6;
        z-index: 99;
        box-shadow: 0 0 1rem .01rem rgba(0,0,0,0.3);
    }

    ::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
        display: flex;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: red;
        z-index: 99;
        box-shadow: 0 0 1rem .01rem rgba(0,0,0,0.3);
    }

    :last-child {
        ::before {
            content: '';
            background: red;
        }
    }
`;

export const Date = styled.p`
    color: #222;
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%) rotate(90deg);
    z-index: 9999;
`
