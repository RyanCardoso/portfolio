// Libs 
import React from "react";
import * as S from "./styles";

// Images
import Eu from "../../../images/bradovisk.png";

const Main = () => {
    return (
        <S.Container>
            <S.Header>
                <S.BoxImg>
                    <img src={Eu} alt="img" />
                </S.BoxImg>
                <S.BoxTitle>
                    <h1>
                        Ryan Cardoso
                    </h1>
                    <h2>
                        Dev front end
                    </h2>
                </S.BoxTitle>
            </S.Header>

            <S.Content>
                <p>
                    Bom, meu nome é Ryan Ferreira tenho 18 anos, nasci no dia 17 de junho de 2001. Me formei recentemente no Colégio Jose Leite Lopes - Nave (Núcleo Avançado em Educação), o qual aborda os cursos em Game Design e Multimídia. Me profissionalizei em Game Design. No começo, antes de eu entrar para o Nave, tinha sonhos e metas diferentes. Pretendia cursar Arquitetura, pois eu a vejo como uma forma de interagir a arte com a matemática, o que a torna magnífica. Mas acabei me apaixonando em programação!
                </p>
            </S.Content>
        </S.Container>
    )
}

export default Main;