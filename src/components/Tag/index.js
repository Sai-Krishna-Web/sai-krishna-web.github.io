import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

const Tag = ({ name, count }) => (
  <Link to={`/tag/${name}`} href={`/tag/${name}`} className="header-tag2">
    {name}
    &nbsp;
    {count}
  </Link>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  count: '',
};

export default Tag;
