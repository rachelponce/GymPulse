import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
    background-image: url('fitnessbackground1.png');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Button = styled.button`
  padding: 25px 40px;
  background-color: #095fad;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  display: flex; 
  margin-right: 10px; 

  &:hover {
    background-color: #064990;
  }
`;

export const Title = styled.h1`
    font-size: 90px;
    color: #fff;
`;

export const Header = styled.h2`
    color: white;
    text-align: center;
`;