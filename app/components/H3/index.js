import React from 'react';

function H3(props) {
  return (
    <div>
      <h3 className={props.className}>{props.text}</h3>
    </div>
  );
}

export default H3;
