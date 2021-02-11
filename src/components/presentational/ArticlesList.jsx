import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';


const ArticleList = ({ articles }) => {
    const ArticleElements = articles.map(article => (
        <li key={article.title}> 
            <Article { ...article} />
        </li>
    ))

    return (
        <ul>
            {ArticleElements}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        title: PropTypes.string.isRequired,
        urlToImage: PropTypes.string

    })).isRequired
};

export default ArticleList