/**
 *
 * Input
 *
 */

import React from 'react';

function Input(props) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

Input.propTypes = {};

export default Input;
