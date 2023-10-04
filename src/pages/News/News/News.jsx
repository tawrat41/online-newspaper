import React, { useEffect, useState } from 'react';

const News = () => {

    const [news, setNews] = useState([])

    useEffect( () =>{
        fetch("http://localhost:5000/news")
        .then(res => res.json())
        .then(data => setNews(data))
    }, [] )


    return (
        <div>
            {
                news.map( news => (
                    <h1 key={news._id}>{news.category_id}</h1>
                ))
            }
        </div>
    );
};

export default News;