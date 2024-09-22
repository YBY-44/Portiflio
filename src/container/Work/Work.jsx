import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
const Work = () => {
  const [isHovered, setIsHovered] = useState([]);
  const [activeFilter, setactive] = useState('All');
  const [animatecard, setcard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filters, setFilter] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilter(data);
      let cur_hover = [];
      data.forEach(() => {
        cur_hover.push(false);
      });
      console.log(cur_hover);
      setIsHovered(cur_hover);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setactive(item);
    setcard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setcard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilter(works);
        let cur_hover = [];
        works.forEach(() => {
          cur_hover.push(false);
        });
        console.log(cur_hover);
        setIsHovered(cur_hover);
      } else {
        const cur_work = works.filter((work) => {
          return work.tags.includes(item);
        });
        console.log(cur_work);
        let cur_hover = [];
        cur_work.forEach(() => {
          cur_hover.push(false);
        });
        console.log(cur_hover);
        setIsHovered(cur_hover);
        setFilter(cur_work);
      }
    }, 500);
  };
  const handleHoverStart = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = true;
    setIsHovered(newHovered);
  };

  const handleHoverEnd = (index) => {
    const newHovered = [...isHovered];
    newHovered[index] = false;
    setIsHovered(newHovered);
  };
  return (
    <>
      <h2 className='head-text'>
        My creative <span>Portfolio</span> section
      </h2>
      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'React Js','TypeScript', 'All'].map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleWorkFilter(item);
              }}
              className={
                'app__work-filter-item app__flex p-text ' +
                (activeFilter === item ? 'item-active' : '')
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      <motion.div
        animate={animatecard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filters.map((work, index) => {
          return (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered[index] === true ? 1 : 0 }}
                  onHoverStart={() => {
                    handleHoverStart(index);
                  }}
                  onHoverEnd={() => {
                    handleHoverEnd(index);
                  }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.describe}
                </p>
                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work', 
  'app__whitebg');
