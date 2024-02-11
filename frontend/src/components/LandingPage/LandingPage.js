import React from 'react';
import PropTypes from 'prop-types';
import { LandingPageWrapper, Title, Button} from './LandingPage.styled';


const LandingPage = () => (
 <LandingPageWrapper className='wrapper'>
     <Title> Welcome to Gym Pulse </Title>
     <Button onClick={handleStarting}>Get Started</Button>
 </LandingPageWrapper>
);

const handleStarting = () => {
    console.log('Starting...');
  };

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
