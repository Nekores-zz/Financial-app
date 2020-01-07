/**
 *
 * H4
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function H4(props) {
  return (
    <div>
      <h4 className={props.className}>{props.text}</h4>
    </div>
  );
}

H4.propTypes = {};

export default H4;
