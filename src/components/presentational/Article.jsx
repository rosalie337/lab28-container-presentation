import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, author, image}) => (
    <figure>
        <h3>{title}</h3>
        <p>{author}</p>
        <image src={image} />
    </figure>
);

Article.PropTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Article;
