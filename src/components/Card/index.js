import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import { parseImgur } from '../../api/images';
import { parseDate } from '../../api';

import './index.scss';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: ` url(${parseImgur(headerImage, 'large')})`,
  
});

const CardHeader = ({ url, image, backgroundColor,tags }) => (
 <div className="wrapper tag-wrap" style={imageStyle(image, backgroundColor)} >
    {tags.map(name => (
              <Tag name={name} key={name} />
            ))}
    </div>
    

);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  tags = [],
}) => (
  
  <div className="col-sm-12 pb-4 link">
    <div className="custom-card">
      {headerImage && (
        <CardHeader
          url={url}
          image={headerImage}
          backgroundColor={headerBackgroundColor}
          tags={tags}
        />
      )}
      <div className="data">
        <div className="content">
          <Link to={url} href={url}>
            <h4 className="title">{title}</h4>
          </Link>
          <p>{description}</p>
          <Link to={url} href={url}>
           ... continue reading
          </Link>
          <div className="stats">
      <span className="date">{parseDate(date)}</span>
            
          </div>
         
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = {
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
};

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
  title:'',
};

export default Card;
