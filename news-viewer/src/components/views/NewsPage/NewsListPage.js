import React from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import styled from 'styled-components';
import usePromise from '../../../lib/usePromise';
import API_KEY from '../../../Config';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`,
        );
    }, [category]);

    if(loading) {
        return <NewsListBlock>Loading...</NewsListBlock>;
    }

    if(!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>{error}</NewsListBlock>;
    }

    const { articles } = response;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;