import React, { Component } from 'react';
import { getArticles } from '../../services/getArticles';
import ArticleList from '../presentational/ArticlesList';
import Search from '../presentational/Search';

export default class NewsSearch extends Component {

    state = {
        search: 'GME',
        articles: [],
        loading: false,
    };

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = () => {
        this.setState({ loading: true });
        getArticles(this.state.search).then((articles) => {
            this.setState({ articles, loading: false })
        });
    };

    handleChange = ({target}) => {
        this.setState({search: target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault() 
          this.fetchArticles().then(({ articles }) => {
            this.setState({ articles})
          });
    };

    render() {
        const {search, articles, loading, } = this.state;
        console.log(articles);
        return (
           <>
            <Search handleChange={this.handleChange} search={search} onSubmit={this.handleSubmit} />
            {loading && <h1>Loading</h1>}
            <ArticleList articles={articles} />
            </>
        )
    }
};
