// @flow
import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import {
  Row,
  Col
} from 'reactstrap';
import { getImageSrc } from '../utils/imageUtils';

export default class Home extends Component {
  render() {
    const { products } = this.props;
    const list = Object.keys(products).map(key => {
      const product = products[key];
      return (
        <Col className='d-flex h-100 justify-content-center align-self-center' key={`category_${key}`}>
          <button className="btn btn-link" onClick={() => this.props.history.push(`/products/${key}`)}>
            <img src={getImageSrc(product["image"])} className="rounded-circle category-btn" alt="Cinque Terre" />
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
