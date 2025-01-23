import React from 'react';

const InteractiveElements = () => {
  const handleClick = () => {
    alert('Element clicked!');
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'lightblue';
  };

  const handleMouseOut = (event) => {
    event.target.style.backgroundColor = '';
  };

  return (
    <div>
      <div
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ width: '100px', height: '100px', border: '1px solid black', margin: '10px' }}
      >
        Clickable Element
      </div>
    </div>
  );
};

export default InteractiveElements;
