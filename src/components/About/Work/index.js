// Libs 
import React from "react";
import * as S from "./styles";

const Work = () => {
    return (
        <S.Container>
                <S.Title>Work History</S.Title>
            <S.CardsWork>
                <S.BoxWork data-aos="fade-up-right">
                    <S.BoxLogo>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4D0BAQHdxnT1uEt__A/company-logo_200_200/0/1555610039836?e=1647475200&v=beta&t=fs4xkwNoWvBcwtSRlTg8YS5zZ-Zchc1W8mHGz9jF73U"
                            alt="" />
                    </S.BoxLogo>
                    <S.Content>
                        <h2>Dev Front End</h2>
                        <h4>Vai na Web</h4>
                        <p>abr - nov | 8 meses</p>
                    </S.Content>
                    <S.BoxBar className="boxBar">
                        <S.Date>
                            2021
                        </S.Date>
                    </S.BoxBar>
                </S.BoxWork>

                <S.BoxWork data-aos="fade-up-left">
                    <S.BoxLogo>
                        <img
                            src="https://media-exp1.licdn.com/dms/image/C4E0BAQETr0iVHnIqKQ/company-logo_200_200/0/1519876964140?e=1647475200&v=beta&t=qSjscnnQ9XaXXF16qBS0JiBkrYkeW8tPuRcENbmCCy4"
                            alt="" />
                    </S.BoxLogo>
                    <S.Content>
                        <h2>Dev Front End</h2>
                        <h4>1STi</h4>
                        <p>nov - atualmente</p>
                    </S.Content>
                    <S.BoxBar className="boxBar">
                        <S.Date>
                            2021
                        </S.Date>
                    </S.BoxBar>
                </S.BoxWork>
            </S.CardsWork>
        </S.Container>
    )
}

export default Work;