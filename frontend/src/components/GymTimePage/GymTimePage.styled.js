import styled from 'styled-components';

export const GymTimePageWrapper = styled.div`
    background: #F5E0B7;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardsWrapper = styled.div`
    background: #F5E0B7;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background: #4F3130;
    border-radius: 25px;
    width: 20vw;
    height: 50vh;
    margin: 5%;
    padding: 1%;
    justify-content: center;
    align-items: center;

    &:hover {
        transition-duration: 0.6s;
        scale: 115%;
    }
`;

export const Photo = styled.img`
    border: 1px solid white;
    object-fit: contain;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;

export const Title = styled.h1`
    font-size: 70px;
`;

export const Header = styled.h2`
    color: white;
    text-align: center;
`;