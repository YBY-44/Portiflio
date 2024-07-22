import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';
const Footer = () => {
  const [formData, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submit, setSubmit] = useState(false);
  const [loading, setloading] = useState(false);
  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const handleSubmit= ()=>{
    setloading(true);
    const contact={
      _type:'contact',
      name:name,
      email:email,
      message:message,

    }
    client.create(contact)
    .then(()=>{
      setloading(false); 
      setSubmit(true);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:boyangyby@gmail.com' className='p-text'>
            boyangyby@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+61 (466) 293-361' className='p-text'>
            +61 466-293-361
          </a>
        </div>
      </div>
      {!submit?(
          <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              type='text'
              placeholder='Your Message'
              value = {message}
              name = 'message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ):(
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}

    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
