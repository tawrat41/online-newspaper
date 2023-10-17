import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../../Home/category";
import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {

  const news = useLoaderData();

  const { _id, title, details, image_url, author, total_view, rating, category_id } = news;


  return (
    <div className="p-3">
        <h2 className="mb-3">Dragon News</h2>
      <Card>
        <Card.Img variant="top" src={image_url} className="p-4"/>
        <Card.Body className="p-4">
          <Card.Title><h2 className="font-weight-bold pb-4">{title}</h2></Card.Title>
          <Card.Text className="pb-4">
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger">  <FaArrowLeft/>   All News in this category</Button></Link>
        </Card.Body>
      </Card>
      <div className="mt-5">
        <EditorsInsight></EditorsInsight>
      </div>
    </div>
  );
};

export default News;
