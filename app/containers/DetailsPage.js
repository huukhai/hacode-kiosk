import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = (state, ownProps) => {
  let categoryCode = ownProps.match.params.category;
  //let productCode = ownProps.match.params.id;
  let products = state.products[categoryCode] || {};
  //let lstProduct = products['data'] || [];
  //let product = lstProduct.find(item => item.code == productCode) || {};

  return {
    products
  }
}

export default connect(mapStateToProps)(ProductDetail);
