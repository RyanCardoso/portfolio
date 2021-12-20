// Libs
import React, { useState } from "react";
import * as S from "./styles";

const Toggle = props => {
    //const [check, setCheck] = useState(false);

    return (
        <S.Container
            isCheck={props.isCheck}
        >
            <S.Toggle 
                isCheck={props.isCheck}
                onClick={props.onclick}
            />
        </S.Container>
    )
}

export default Toggle;

