// Libs
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 3.5rem;
    text-align: center;
`

export const BoxCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: 5rem;
`

export const Card = styled.div`
    max-width: 250px;
    width: 100%;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 1rem .1rem rgba(0,0,0,0.2);
    cursor: pointer;
    transition: transform .2s ease;

    :hover {
        transform: translateY(-20px);
    }
`

export const CHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background: rgb(63,142,214,0.5);

    div {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: blue;

        :nth-child(2) {
            margin: 0 .2rem;
        }
    }

    p {
        margin-left: 1rem;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;

    p {
        margin: .5rem 0;
    }
`

