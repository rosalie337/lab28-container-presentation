export const getArticles = (search) => {
    return fetch(`http://newsapi.org/v2/everything?q=${search}&apiKey=c1a5618bf4114e0e9432a9c78bd9cb01`)
        .then(res => res.json())
        .then(json => json.articles)
}