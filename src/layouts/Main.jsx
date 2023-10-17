/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "./RightNav";
import LeftNav from "./leftNav";
import Category from "../pages/Home/category";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/Header/NavigationBar/NavigationBar";
// import LeftNav from './LeftNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>
          <Col lg={6}><Outlet><Category></Category></Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
        
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
