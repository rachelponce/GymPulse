import React from 'react';
import PropTypes from 'prop-types';
import { MainPageWrapper, Header, TextBackground } from './MainPage.styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
   const navigate = useNavigate();

   const handleClick = async () => {
      navigate('/gym-page');
   }

   return (
      <MainPageWrapper>
         <center>
            <Header>It's Gym Time!</Header>
            <Button variant="contained" color="success" onClick={handleClick}>Gym Time!</Button>
         </center>
      </MainPageWrapper>
   );
};

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
