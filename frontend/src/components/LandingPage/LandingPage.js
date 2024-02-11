import React from 'react';
import PropTypes from 'prop-types';
import { LandingPageWrapper, Title, Button} from './LandingPage.styled';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleStarting = () => {
      console.log('Starting...');
      navigate('/main-page');
  };

  return(
  <LandingPageWrapper className='wrapper'>
      <Title> Welcome to Gym Pulse </Title>
      <Button onClick={handleStarting}>Get Started</Button>
  </LandingPageWrapper>
  );
};


LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
