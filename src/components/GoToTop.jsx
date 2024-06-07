import React, { useState, useEffect } from 'react'
import {HiOutlineArrowCircleUp} from 'react-icons/hi'


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHeightThreshold = 2500;

  const handleScroll = () => {
    if (window.scrollY > scrollHeightThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        } fixed bottom-10 right-0 cursor-pointer transform transition-transform duration-500 ease-in-out`}
      >
        <HiOutlineArrowCircleUp
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='w-10 h-10 text-orange-darker hover:text-orange-light'
        />
      </div>
    </div>
  );
};

export default GoToTop;
