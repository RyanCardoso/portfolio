// Libs
import React from "react";
import * as S from "./styles";

// Components 
import Sidebar from "../sidebar";

const Layout = ({children}) => {
    return (
        <S.Container>
            <S.GlobalStyle />
            <Sidebar />
            <S.Content>
                {children}
            </S.Content>
        </S.Container>
    );
};

export default Layout;
