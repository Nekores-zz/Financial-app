/**
 *
 * Card
 *
 */

import React from 'react';

function Card(props) {
  const dragStart = e => {
    e.dataTransfer.setData(`card_id_${props.cardID}`, e.target.id);
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
