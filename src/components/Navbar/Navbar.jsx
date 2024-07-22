import React,{ useState } from 'react';
import './Navbar.scss';
import { images } from "../../constants";
import { HiMenuAlt4,HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [open_right_bar,set_open_bar] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src = {images.logo} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['home','about','work','skill','contact'].map((item)=>
          (
            <li key = {'link-'+item.toString()} className='app__flex p-text'>
              <div/>
              <a href={"#" + item.toString()}>{item}</a>
            </li>
          )
          )}
      </ul>
      <div className="app__navbar-menus">
            <HiMenuAlt4 onClick={()=>set_open_bar(true)}/>
            {open_right_bar && (
              <motion.div 
                initial={{ x: 200, opacity: 0 }} // 设置初始状态
                animate={{ x: 0, opacity: 1 }}
                transition={{duration:0.85, ease:'easeOut'}}>
                  <HiX onClick={()=>{set_open_bar(false);}}/>
                  <ul>
                   {['home','about','work','skill','testimonial','contact'].map((item)=>
                     (
                      <li key = {item.toString()}>
                        <a href={"#" + item.toString()} onClick={()=>{set_open_bar(false);}}>{item}</a>
                      </li>
                     )
                   )}
                  </ul>
              </motion.div>
            )}
      </div>
    </nav>
  )
}
export default Navbar;