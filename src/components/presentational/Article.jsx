import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, author, urlToImage}) => (
    <figure>
        <h3>{title}</h3>
        <p>{author}</p>
        <img src={urlToImage} />
    </figure>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    urlToImage: PropTypes.string,
};

export default Article;
