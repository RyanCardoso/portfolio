import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    width: 280px;
    height: 100vh;
    padding: 32px 0;
    background: #FFFFFF;
    box-shadow: 5px 0px 50px 2px rgba(0,0,0,0.2); 
`;

export const Item = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 32px;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    transition: .4s ease-in-out;

    :hover{
        background: #E6E6DF;
        border-left: .4rem solid #3F8FD6;
    }
`;

export const Figure = styled.figure`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    img {
        width: 50%;
    }
`;

export const Title = styled.div`
    padding-left: .5rem;
    z-index: 2;
    
    flex: 1;

    h4 {
        font-size: 18px;
    }
`;