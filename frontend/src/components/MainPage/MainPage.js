import React from 'react';
import PropTypes from 'prop-types';
import { MainPageWrapper } from './MainPage.styled';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
   const navigate = useNavigate();

   const handleClick = async () => {
      navigate('/gym-page');
   }

   return (
      <MainPageWrapper>
         MainPage Component
         <Button onClick={handleClick}>Gym Time!</Button>
      </MainPageWrapper>
   );
};

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
