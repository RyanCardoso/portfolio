import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    width: 280px;
    height: 100vh;
    padding: 32px 0;
    background: #FFFFFF;
    box-shadow: 5px 0px 50px 2px rgba(0,0,0,0.2); 
`;

export const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileImg = styled.figure`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
        width: 100%;
        object-fit: cover;
    }
`;

export const ProfileTxt = styled.div`
    padding: 16px 0 0;
    text-align: center;

    h3 {
        font-size: 1.3rem;
        margin-bottom: .25rem;
    }

    p {
        color: #8a8a8a;
    }
`;

export const Git = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    border-top: 1px solid #cdcdcd;
    border-bottom: 1px solid #cdcdcd;
    padding: 32px 0;
    margin: 1.5rem 0;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
        color: #000;

        h4 {
            font-size: 1.5rem;
        }

        p {
            color: #8a8a8a;
        }
    }
`;

export const Item = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 32px;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    transition: .4s ease-in-out;

    :hover{
        background: #E6E6DF;
        border-left: .4rem solid #3F8FD6;
    }
`;

export const Figure = styled.figure`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    img {
        width: 50%;
    }
`;

export const Title = styled.div`
    padding-left: .5rem;
    z-index: 2;
    
    flex: 1;

    h4 {
        font-size: 18px;
    }
`;