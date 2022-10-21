import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import LeftSideNav from '../pages/Shared/LefSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col lg="2">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="7">
                    <Outlet>

                    </Outlet>
                </Col>
                <Col lg="3">
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Main;