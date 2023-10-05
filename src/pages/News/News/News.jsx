import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const News = () => {

  const news = useLoaderData();

  const { _id, title, details, image_url, author, total_view, rating } = news;


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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
