import React from 'react';
import PropTypes from 'prop-types';
import { MainPageWrapper } from './MainPage.styled';
import Button from '@mui/material/Button';

const MainPage = () => (
 <MainPageWrapper>
    MainPage Component
   <Button>Click Me!</Button>
 </MainPageWrapper>
);

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
