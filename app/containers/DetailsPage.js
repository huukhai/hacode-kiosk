import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = (state, ownProps) => {
  const categoryCode = ownProps.match.params.category;
  const products = state.products[categoryCode] || {};

  return {
    products
  }
}

export default connect(mapStateToProps)(ProductDetail);
