// Libs
import React, { useEffect } from "react";
import * as S from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

// Components 
import Sidebar from "../sidebar";

const Layout = props => {

    useEffect(() => {
        AOS.init({
            duration : 2000,
        });
    }, [])

    return (
        <S.Container>
            <S.GlobalStyle isDark={props.isCheck} />
            <Sidebar
                isCheck={props.isCheck}
                onclick={props.onclick}
            />
            <S.Content isDark={props.isCheck} >
                {props.children}
            </S.Content>
        </S.Container>
    );
};

export default Layout;
