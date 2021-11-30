import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 60px;
    height: 25px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    box-shadow: inset 0 0 10px 2px #cdcdcd;
    background: ${ props => props.isCheck ? '#63D600' : '#FFF'};
    transition: 1s ease-in-out;
`;

export const Toggle = styled.div`
    position: absolute;
    top: 50%;
    left: ${ props => props.isCheck ? 'calc(90% - 18px)' : '10%'};
    transform: translateY(-50%);
    transition: .5s ease-in-out;
    width: 18px;
    height: 18px;
    background: #FFF;
    border-radius: 50%;
    box-shadow: 0 0 5px .2px #cdcdcd;
    cursor: pointer;
`;