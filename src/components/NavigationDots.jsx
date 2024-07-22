import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skill', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            href={'#' + item.toString()}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
            aria-label={item}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
