import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
const Skills = () => {
  const [Experience, setExperience] = useState([]);
  const [Skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {Skills.map((skills) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={skills.name}
              >
                <div
                  className='app__flex'
                  style={{ backgroundColor: skills.bgColor }}
                >
                  <img src={urlFor(skills.icon)} alt={skills.tag}></img>
                </div>
                <p className='p-text'>{skills.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {Experience.map((exp) => {
            return (
              <motion.div className='app__skills-exp-item' key={exp.year}>
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{exp.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {exp.works.map((work) => {
                    console.log(work.name + '..');
                    return (
                      <div
                        key={work.name}

                        data-tooltip-id={work.name + '..'}
                        data-tooltip-content={work.desc}
                      >
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className='app__skills-exp-work'
                        >
                          <h4 className='bold-text'>{work.name}</h4>
                          <p className='p-text'>{work.company}</p>
                        </motion.div>
                        <Tooltip
                          id={work.name + '..'}
                          className='app__skills-tooltip'
                        />
                        <div
                        // id={work.name + '..'}
                        // effect='solid'
                        // e
                        ></div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skill',
  'app__whitebg'
);
