export const getArticles = () => {
    return fetch('`https://newsapi.org/v2/everything?q=${SEARCH}&apiKey=${API_KEY}`')
        .then(res => res.json)
        .then(json => json.results)
}