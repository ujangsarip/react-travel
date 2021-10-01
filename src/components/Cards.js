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
              text='India is famous for many historical monuments and the architectural skill involved.'
              label='India'
              path='/services'
            />
            <CardItem
              src='images/Italy.png'
              text='The pristine coastlines of Italy are washed by the waters of five seas: The Mediterranean, Adriatic, Ionian, Tyrrhenian, and Ligurian.'
              label='Italy'
              path='/products'
            />
            <CardItem
              src='images/France.png'
              text='Paris has been the most romantic destination in the world in the popular imagination for time immemorial.'
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
