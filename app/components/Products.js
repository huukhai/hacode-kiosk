// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Row, Col } from 'reactstrap';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class Products extends Component<Props> {
  render() {
    let { products } = this.props
    let lstProducts = products['data'].map(product => (
      <Col sx="12" sm="6" md="4" lg="2" key={`${this.props.match.params.category}-${product['code']}`} className="product-list-item">
        <span onClick={() => this.props.history.push(`/details/${this.props.match.params.category}/${product['code']}`)}>
          <Card>
            <CardMedia>
              <img className="product-list-image" src={product.image} alt="" />
            </CardMedia>
            <CardTitle
              title={product['name']}
              subtitle={product['product_code']}
              style={{ padding: '10px', borderTop: '1px solid #e9f2f9', paddingBottom: 0 }}
              titleStyle={{ fontSize: '18px', lineHeight: '20px' }}
              subtitleStyle={{ fontSize: '11px', lineHeight: '20px' }}
            />
            {/* <CardText
              style={{ padding: '0px 10px', fontSize: '13px' }}
            >{product['descriptions']}
            </CardText> */}
          </Card>
        </span>
      </Col>
    ));

    return (
      <div>
        <AppBar
          title={products['name']}
          iconClassNameLeft="fa fa-chevron-left"
          onLeftIconButtonClick={() => this.props.history.goBack()}
          className="app-nav-bar"
        />
        <Row className="product-list">
          {lstProducts}
        </Row>
      </div>
    );
  }
}
