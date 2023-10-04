import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import { key } from "localforage";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {/* <h2>this a category: {categoryNews.length}</h2> */}
      {categoryNews.map((news) => (
        <NewsCard 
        key={news._id}
        news = {news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
