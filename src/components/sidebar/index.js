// Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';

const Sidebar = () => {
    const [dataGit, setDataGit] = useState([]);
    const profile = [{
        img: {
            id: 1,
            url: "https://github.com/RyanCardoso.png",
            alt: 'img_profile'
        },
        name: "Ryan Cardoso",
        andress: "Brasil / Rio de Janeiro / RJ"
    }]

    const items = [{
        img: {
            id: 1,
            url: 'https://cdn-icons-png.flaticon.com/512/456/456212.png',
            alt: 'testando'
        },
        title: 'About',
        link: '#about'
    },
    {
        img: {
            id: 1,
            url: 'https://cdn-icons.flaticon.com/png/512/1979/premium/1979375.png?token=exp=1638116989~hmac=2f845aaa9782298b4715b7902dc36c13',
            alt: 'testando'
        },
        title: 'Skills',
        link: '#about'
    },
    {
        img: {
            id: 1,
            url: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
            alt: 'testando'
        },
        title: 'Projects',
        link: '#about'
    },

    ]

    useEffect(() => {
        getDataGit();
    }, [])

    useEffect(() => {
        console.log(dataGit)
    }, [dataGit])

    const getDataGit = async () => {
        const response = await axios.get('https://api.github.com/users/ryancardoso');
        const repos = await axios.get('https://api.github.com/users/ryancardoso/repos');

        setDataGit([response.data, repos.data]);
        console.log(dataGit)
    }

    return (
        <S.Container>
            <S.Profile>
                <S.ProfileImg>
                    <img
                        src={profile[0].img.url}
                        alt={profile[0].img.alt}
                    />
                </S.ProfileImg>
                <S.ProfileTxt>
                    <h3>{profile[0].name}</h3>
                    <p>{profile[0].andress}</p>
                </S.ProfileTxt>
                <S.Git>
                    <a
                        href="https://github.com/RyanCardoso?tab=repositories"
                        target="_blank"
                    >
                        <h4>{dataGit[1]?.length}</h4>
                        <p>Repos</p>
                    </a>
                    <a
                        href="https://github.com/RyanCardoso?tab=followers"
                        target="_blank"
                    >
                        <h4>{dataGit[0]?.followers}</h4>
                        <p>Followers</p>
                    </a>
                    <a
                        href="https://github.com/RyanCardoso?tab=following"
                        target="_blank"
                    >
                        <h4>{dataGit[0]?.following}</h4>
                        <p>Following</p>
                    </a>
                </S.Git>
            </S.Profile>
            {items.map((item, index) => (
                <S.Item key={index}>
                    <S.Figure>
                        <img
                            src={item.img.url}
                            alt={item.img.alt}
                        />
                    </S.Figure>
                    <S.Title>
                        <h4>{item.title}</h4>
                    </S.Title>
                </S.Item>
            ))}
        </S.Container>
    );
}

export default Sidebar;