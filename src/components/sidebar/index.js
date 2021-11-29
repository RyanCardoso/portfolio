import React from 'react';
import * as S from './styles';

const Sidebar = () => {
    const Profile = [{
        img: {
            id: 1,
            url: "https://github.com/RyanCardoso",
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

    return (
        <S.Container>

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