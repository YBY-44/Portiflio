import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { images } from '../../constants';
import { client, urlFor } from '../../client';

const About = () => {
  const [about_me, set_about_me] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => {
        set_about_me(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I know That
        <span> Good Apps </span>
        <br />
        means
        <span> Good Business </span>
      </h2>
      <div className='app__profiles'>
        {about_me.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <h2 className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
