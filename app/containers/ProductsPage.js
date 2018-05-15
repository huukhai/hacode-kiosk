import { connect } from 'react-redux';
import Products from '../components/Products';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products[ownProps.match.params.category]
  }
}

export default connect(mapStateToProps)(Products);
