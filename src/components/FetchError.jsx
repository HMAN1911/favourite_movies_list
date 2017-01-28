import React, { PropTypes } from 'react';

const FetchError = ({ reason }) => (
  <div>
    <p>Whoops... something went wrong.</p>
    <code>{reason.toString()}</code>
  </div>
);

FetchError.propTypes = {
  reason: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FetchError;
