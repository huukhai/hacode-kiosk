// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import styles from './Home.css';
import HomeCarousel from './HomeCarousel';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Home extends Component {
  render() {
    let { products } = this.props;
    let list = Object.keys(products).map(key => {
      let product = products[key];
      return (
        <Col className='d-flex h-100 justify-content-center align-self-center' key={`category_${key}`}>
          <button className="btn btn-link" onClick={() => this.props.history.push(`/products/${key}`)}>
            <img src={product['image']} className="rounded-circle category-btn" alt="Cinque Terre" />
          </button>
        </Col>
      )
    });

    return (
      <div className="d-flex flex-column">
        <Row className="home-carousel">
          <Col>
            <HomeCarousel />
          </Col>
        </Row>
        <Row className="categories-btn d-flex align-items-center">
          {list}
        </Row>
      </div >
    );
  };
}
