import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    width: ${props => props.width};
    background: purple;
`;