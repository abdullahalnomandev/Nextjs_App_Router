import React from 'react';

const NewsDetailPage = ({params,searchParams}) => {
    console.log("searchParams",searchParams);
    return (
        <div>
            <h1>News Dynamic Page of {params.id}</h1>
        </div>
    );
};

export default NewsDetailPage;