/**
 *
 * Board
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Board(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';
    // if (card.id === 'card-1') {
    e.target.appendChild(card);
    console.log(card.id, 'target');
    // } else {
    // }
  };
  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

Board.propTypes = {};

export default Board;
