import React from 'react';
import Categories from '../components/views/Categories';
import NewsList from '../components/views/NewsPage/NewsListPage';

const NewPage = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    )
}

export default NewPage