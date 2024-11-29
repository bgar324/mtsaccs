import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/SlideInComponent.css';

const SlideInComponent = ({ children, direction = 'left', className = '', ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Is intersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    console.log('Ref current:', ref.current); // Check if ref is correctly attached
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} slide-in-${direction} ${isVisible ? 'visible' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

SlideInComponent.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  className: PropTypes.string,
};

export default SlideInComponent;