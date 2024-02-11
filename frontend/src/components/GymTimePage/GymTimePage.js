import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GymTimePageWrapper, Card, Photo, Title, CardsWrapper, Header, CustomText, ListItem } from './GymTimePage.styled';
import listData from './listData';

const GymTimePage = () => {

   const [expandedCard, setExpandedCard] = useState(null);

   const handleClick = (id) => {
      setExpandedCard(id == expandedCard ? null : id);
   };

   return (
      <GymTimePageWrapper className='wrapper'>
         <Title>Choose your GymPulse</Title>
         <CardsWrapper>
            {Object.entries(listData).map(([id, customText]) => (
               <Card key={id} onClick={() => handleClick(id)} expanded={expandedCard === id}>
                  <Photo src={`${id}.jpg`} alt={`${id} pic`} expanded={expandedCard === id}/>
                  <Header expanded={expandedCard === id}>{id}</Header>
                  {expandedCard === id && (
                  <CustomText>
                     <ul>
                     {customText.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                     ))}
                     </ul>
                  </CustomText>
              )}
               </Card>

            ))}
            {/* {[{ id: "cardio", header: "Cardio", text: ""}, { id: "back", header: "Back and Bicep" }, { id: "tricep", header: "Chest and Tricep" }, { id: "legs", header: "Legs" }].map(({ id, header }) => (
            ))} */}
         </CardsWrapper>
      </GymTimePageWrapper>
   );
};

GymTimePage.propTypes = {};

GymTimePage.defaultProps = {};

export default GymTimePage;
