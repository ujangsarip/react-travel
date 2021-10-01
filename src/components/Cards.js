import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Mongolia.png'
              text='Make your Mongolia adventure even more memorable with our eagle festival tour.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/India.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='India'
              path='/services'
            />
            <CardItem
              src='images/Italy.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Italy'
              path='/products'
            />
            <CardItem
              src='images/France.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='France'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
