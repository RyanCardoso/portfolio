// Libs
import React, { useState } from "react";
import * as S from "./styles";

const Toggle = () => {
    const [check, setCheck] = useState(false);

    return (
        <S.Container
            isCheck={check}
        >
            <S.Toggle 
                isCheck={check}
                onClick={() => setCheck(!check)}
            />
        </S.Container>
    )
}

export default Toggle;

