import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category {categoryNews.length} </h2>
            {
                categoryNews.map(news => <NewsSummaryCard key={news._id}
                    news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;