import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import { AiOutlineWechat } from 'react-icons/ai'; 
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/boyang-yu-083986259'>
            <FaLinkedinIn/>
          </a>
        </div>
        <div>
          <a href='https://www.facebook.com/profile.php?id=100088436180000'>
            <FaFacebookF/>
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/boyang8537/'>
            <BsInstagram/>
          </a>

        </div>
    </div>
  )
}

export default SocialMedia;