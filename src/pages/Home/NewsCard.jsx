/* eslint-disable react/prop-types */
import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import moment from "moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image src={author?.img} style={{ height: "40px" }} roundedCircle />
            <div className="ms-2">
              <p>
                {author?.name} <br />{" "}
                <small className="text-secondary">
                  {" "}
                  {moment(author?.published_date).format("YYYY-MM-DD")}{" "}
                </small>{" "}
              </p>
              {/* <p >{author.published_date}</p> */}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="mb-">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="my-2">
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link
                  to={`/news/${_id}`}
                  style={{ color: "#FF8C47" }}
                  className="text-decoration-none"
                >
                  Read more
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div>
            <Rating
            style={{color: '#FF8C47'}}
              readonly
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            <span className="ms-2">{rating.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
