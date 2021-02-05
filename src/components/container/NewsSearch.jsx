import React, { Component } from 'react';
import { getArticles } from '../../services/getArticles';
import ArticleList from '../presentational/ArticlesList';

export default class NewsSearch extends Component {

    state = {
        query: 'GME',
        articles: [],
        loading: false,
    };

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = () => {
        this.setState({ loading: true });
        getArticles(this.state.query).then((articles) =>
            this.setState({ articles, loading: false })
        );
    };

    handleSearch = ({ target }) => {
        this.setState({ search: target.value }, () => {
            this.fetchArticles();
        });
    }

    render() {
        const { search, articles, loading, } = this.state;
        console.log(articles);
        return (
           <>
            {/* <Search search={search} onChange={this.handleSearch} /> */}
            {loading && <h1>Loading</h1>}
            <ArticleList articles={articles} />
            </>
        )
    }
};
