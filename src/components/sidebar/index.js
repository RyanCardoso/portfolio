// Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    graphql,
    Link,
    useStaticQuery
} from 'gatsby';


import * as S from './styles';

// Componentes
import Toggle from '../toggle';

const Sidebar = props => {
    const data = useStaticQuery(graphql`
    query {
        allData {
            sidebars {
                profiles {
                    img {
                        fileName
                        id
                        url
                    }
                    name
                    country
                    state
                    city
                }
                sidebarItems {
                    img
                    title
                    link
                }
            }            
        }
      }
      
    `)

    const [dataGit, setDataGit] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);

    const cmsData = data?.allData?.sidebars?.[0];

    useEffect(() => {
        getDataGit();
    }, [])

    const getDataGit = async () => {
        const response = await axios.get('https://api.github.com/users/ryancardoso');
        const repos = await axios.get('https://api.github.com/users/ryancardoso/repos');

        setDataGit([response.data, repos.data]);
    }

    return (
        <S.Container isDark={props.isCheck}>
            <S.Menu>
                <Toggle 
                    isCheck={props.isCheck}
                    onclick={props.onclick}
                />
                {/* <img
                    onClick={() => setOpenMenu(!openMenu)}
                    src={openMenu ?
                        "https://cdn-icons-png.flaticon.com/512/59/59660.png" :
                        "https://cdn-icons-png.flaticon.com/512/130/130918.png"
                    }
                    alt="icon_hamburguer" /> */}
            </S.Menu>
            <S.Profile>
                <S.ProfileImg>
                    <img
                        src={cmsData?.profiles?.[0].img?.url}
                        alt={cmsData?.profiles?.[0].img?.fileName}
                    />
                </S.ProfileImg>
                <S.ProfileTxt>
                    <h3>{cmsData?.profiles?.[0].name}</h3>
                    <p>
                        {
                            cmsData?.profiles?.[0].country + ' / ' +
                            cmsData?.profiles?.[0].state + ' / ' +
                            cmsData?.profiles?.[0].city
                        }
                    </p>
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
            {cmsData?.sidebarItems?.map((item, index) => (
                <S.Item key={index}>
                    <S.Figure>
                        <img
                            src={item?.img}
                            alt={'icon_' + item.title}
                        />
                    </S.Figure>
                    <S.Title>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </S.Title>
                </S.Item>
            ))}
        </S.Container>
    );
}

export default Sidebar;