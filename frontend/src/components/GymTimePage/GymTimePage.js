import React from 'react';
import PropTypes from 'prop-types';
import { GymTimePageWrapper, Card, Photo, Title, CardsWrapper, Header } from './GymTimePage.styled';

const GymTimePage = () => {

   const handleClick = async () => {
      
   }

   return (
      <GymTimePageWrapper className='wrapper'>
         <Title>Choose your GymPulse</Title>
         <CardsWrapper>
            <Card onClick={handleClick()}>
               <Photo src="cardio-pic.jpg" alt="cardio pic" />
               <Header>Cardio</Header>
            </Card>
            <Card>
               <Photo src="back-pic.jpg" alt="back pic" />
               <Header>Back and Bicep</Header>
            </Card>
            <Card>
               <Photo src="tricep-pic.jpg" alt="tricep pic" />
               <Header>Chest and Tricep</Header>
            </Card>
            <Card>
               <Photo src="leg-pic.jpg" alt="leg pic" />
               <Header>Legs</Header>
            </Card>
         </CardsWrapper>
      </GymTimePageWrapper>
   );
};

GymTimePage.propTypes = {};

GymTimePage.defaultProps = {};

export default GymTimePage;
