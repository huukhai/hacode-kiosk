// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ProductDetailList from './ProductDetailList';
import { Row, Col } from 'reactstrap';
import PDFViewer from 'mgr-pdf-viewer-react';
import * as fileUtils from '../utils/fileUtils';

export const CustomPrevButton = (props) => {
  const {
    page,
    pages,
    handlePrevClick
  } = props;
  if (page === 1) return <div></div>;

  return (
    <a className="carousel-control-prev" role="button" onClick={handlePrevClick} tabIndex="0">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>);
};

export const CustomNextButton = (props) => {
  const {
    page,
    pages,
    handleNextClick
  } = props;
  if (page === pages) return <div></div>;

  return (
    <a className="carousel-control-next" role="button" onClick={handleNextClick} tabIndex="0">
      <span className="carousel-control-next-icon" aria-hidden="true">
      </span><span className="sr-only">Next</span>
    </a>
  );
};

export const CustomPages = (props) => {
  const {
    page,
    pages
  } = props;
  return <span className="customPages">{page}/{pages}</span>;
};

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { productId: this.props.match.params.id };
    this.onChangeProduct = this.onChangeProduct.bind(this);
  }

  onChangeProduct(newId) {
    this.setState({ productId: newId });
  }

  render() {
    let { products } = this.props;
    let lstProduct = products['data'] || [];
    let product = lstProduct.find(item => item.code == this.state.productId) || {};

    return (
      <div>
        <AppBar
          title={product['name']}
          iconClassNameLeft="fa fa-chevron-left"
          onLeftIconButtonClick={() => this.props.history.goBack()}
          className="app-nav-bar"
        />

        <Row>
          <Col xs="2" sm="2" md="2" lg="2">
            <ProductDetailList productList={products['data']} onChangeProduct={this.onChangeProduct} selected={this.state.productId} />
          </Col>
          <Col xs="10" sm="10" md="10" lg="10" style={{ backgroundColor: 'gray', height: '100vh' }}>
            <PDFViewer
              key={product['pdf']}
              document={{
                url: fileUtils.getPdf(product['pdf'])
              }}
              css="customViewer"
              //className="customViewer"
              //fillHeight
              navigation={{
                elements: {
                  previousPageBtn: CustomPrevButton,
                  nextPageBtn: CustomNextButton,
                  pages: CustomPages
                }
              }} />
            />
          </Col>
        </Row>
      </div>
    );
  }
}
