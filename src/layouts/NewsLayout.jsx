
import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "./RightNav";
import LeftNav from "./leftNav";
import Category from "../pages/Home/category";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}><Outlet><Category></Category></Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
        
      </Container>
      <Footer></Footer>
    </div>
    );
};

export default NewsLayout;