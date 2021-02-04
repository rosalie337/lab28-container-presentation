import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
    const ArticleElements = article.map(articles => (
        <li key={articles.source}> 
            <Article { ...article} />
        </li>
    ));
            // Line 7 articles.source ... does that work? 
    return (
        <ul>
            {ArticleElements}
        </ul>
    );
};

ArticleList.PropTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        source: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired

    })).isRequired
};

export default ArticleList