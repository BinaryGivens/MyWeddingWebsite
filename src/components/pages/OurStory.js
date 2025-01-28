import React from 'react';
import '../../App.css';






function OurStory() { 
  return (
    <>
      <p className='our-story-header'> 
        A Modern Love Story
      </p>
      <div className='story-container'>
        <div className='love-text-container'>
          <h className='love-header'>
            The meet
          </h>
          <p className ='love-story'>
            Jelina & Markiece have a love story that is both modern and unique. They matched on Tinder in 2021, and despite
            matching the romance did not go much further. Months went by until finally in August that same year
            they went on their first date. After that date, the two of them were inseperable. Their relationship  
            grew quickly from the bonds they shared over numerous first experiences together. These experiences shaped
            them into being the loving couple they are today. Just like most modern relationships, they had their problems,
            but with the support of their loved ones they were able to conquer any hurdle that stood in the way of their happiness.        
          </p>
        </div>
        <div className='love-proposal-container'>
          <h className='proposal-header'>
            The Proposal
          </h>
          <p className='proposal-text'>
            On October 5th, 2021 Markiece asked Jelina to be his girlfriend. 3 years later on that same day he asked Jelina
            to marry him. He had made up his mind to ask her to marry him a month before their 3 year anniversary. He went out
            and bought a ring and began planning the proposal. 
          </p>
        </div>
      </div>
    </>
  );
}


export default OurStory;
