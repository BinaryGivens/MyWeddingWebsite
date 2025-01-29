import React, { useState } from 'react';
import '../../App.css';
import {useNavigate} from 'react-router-dom';

function RSVP() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone }),
        });

        if (response.ok) {
            navigate('/rsvpconfirmationpage')
        } else {
            console.error('Error submitting form');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <>
      <h1 className='rsvp-header'>
        RSVP Here
      </h1>
      <div className="rsvp-container">
        <p className='rsvp-text'>
          This is where you would RSVP for the wedding of Jelina and Markiece.
          Enter your name, email and phone number to RSVP for the wedding.
          For each guest that is attending, have them fill out this form.
        </p>
        <p className='rsvp-text2'>
          NOTE: Do not RSVP unless you are 100% sure that you can attend the wedding.
          Wedding prices fluctuate with the number of guests coming. Please RSVP when you are sure.
        </p>
        <p className='rsvp-text3'>
          RSVP by 03/02/2025
        </p>
        <form id="rsvpform" onSubmit={handleSubmit}>
          <label> Enter your name:
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label> Enter your Email:
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label> Enter your phone number:
            <input 
              type="tel"
              id="number"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </label>
          <input type="submit" id="rsvp" value="RSVP" path='/rsvpconfirmationpage'/>
        </form>
      </div>
    </>
  );
}

export default RSVP;
