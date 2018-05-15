import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { getImageSrc } from '../utils/imageUtils';

const styles = {
    titleStyle: {
        color: '#FCFCFC',
        fontSize: 13,
    },
    subtitleStyle: {
        fontSize: 10,
    },
};

class ProductDetailList extends Component {
    render() {
        let items = this.props.productList.map(product => {
            let imgClass = product['code'] == this.props.selected ? 'product-list-image-selected' : '';
            return (
                <a onClick={() => this.props.onChangeProduct(product['code'])} key={`items-${product['code']}`} style={{ cursor: 'pointer' }}>
                    <GridTile
                        title={product['name']}
                        subtitle={<span><i>{product['product_code']}</i></span>}
                        subtitleStyle={styles.subtitleStyle}
                        titleStyle={styles.titleStyle}
                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    >

                        <img src={getImageSrc(product.image)} style={{ maxWidth: '100%' }} className={imgClass} />

                    </GridTile>
                </a>
            )
        });

        return (
            <div className="product-detail-list">
                <GridList
                    cols={1}
                    cellHeight={100}
                    padding={9}
                >
                    {items}
                </GridList>
            </div>
        )
    }
};

export default ProductDetailList;