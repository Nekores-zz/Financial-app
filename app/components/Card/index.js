/**
 *
 * Card
 *
 */

import React from 'react';

function Card(props) {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      // target.style.display = 'none';
    }, 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      draggable={props.draggable}
      className={props.className}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

Card.propTypes = {};

export default Card;
