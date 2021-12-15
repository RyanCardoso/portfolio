// Libs
import React, { useState } from "react";
import * as S from "./styles";

// Components 
import Sidebar from "../sidebar";

const Layout = props => {
    return (
        <S.Container>
            <S.GlobalStyle isDark={props.isCheck} />
            <Sidebar
                isCheck={props.isCheck}
                onclick={props.onclick}
            />
            <S.Content isDark={props.isCheck}>
                {props.children}
            </S.Content>
        </S.Container>
    );
};

export default Layout;
