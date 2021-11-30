// Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles';

// Componentes
import Toggle from '../toggle';

const Sidebar = () => {
    const [dataGit, setDataGit] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);

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
            alt: 'icon_profile'
        },
        title: 'About',
        link: '#about'
    },
    {
        img: {
            id: 1,
            url: 'https://cdn-icons-png.flaticon.com/512/4692/4692796.png',
            alt: 'icon_skills'
        },
        title: 'Skills',
        link: '#about'
    },
    {
        img: {
            id: 1,
            url: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
            alt: 'icon_projects'
        },
        title: 'Projects',
        link: '#about'
    },

    ]

    useEffect(() => {
        getDataGit();
    }, [])

    const getDataGit = async () => {
        const response = await axios.get('https://api.github.com/users/ryancardoso');
        const repos = await axios.get('https://api.github.com/users/ryancardoso/repos');

        setDataGit([response.data, repos.data]);
    }

    return (
        <S.Container>
            <S.Menu>
                <Toggle />
                <img
                    onClick={() => setOpenMenu(!openMenu)}
                    src={openMenu ?
                        "https://cdn-icons-png.flaticon.com/512/59/59660.png" :
                        "https://cdn-icons.flaticon.com/png/512/3945/premium/3945664.png?token=exp=1638231228~hmac=b9b1cd95f6dd6b227e5f54f98787da51"
                    }
                    alt="icon_hamburguer" />
            </S.Menu>
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