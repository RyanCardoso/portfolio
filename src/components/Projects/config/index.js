// Libs
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import axios from "axios";

const Config = () => {
    const [dataRepos, setDataRepos] = useState([]);

    useEffect(() => {
        handleDataRepos();
    }, [])

    const handleDataRepos = async () => {
        const response = await axios.get("https://api.github.com/users/ryancardoso/repos");
        setDataRepos(response.data);
        console.log(response.data)
    }

    const handleRedirectTo = link => window.open(link)

    return (
        <S.Container>
            <S.Title>
                My Projects
            </S.Title>
            <S.BoxCards>
                {dataRepos.map((item, index) => (
                    <S.Card 
                        key={index}
                        onClick={() => handleRedirectTo(item.html_url)}
                    >
                        <S.CHeader>
                            <div></div>
                            <div></div>
                            <div></div>
                            <p>{item.name}</p>
                        </S.CHeader>
                        <S.Content>
                            <p> Language: {item.language?.length ?
                                    item.language :
                                    'Fork'
                                }
                            </p>
                            <p>Size: {item.size}MB</p>
                        </S.Content>
                    </S.Card>
                ))}
            </S.BoxCards>
        </S.Container>
    )
}

export default Config;