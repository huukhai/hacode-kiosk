import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

class ProductDetailList extends Component {
    render() {
        let items = this.props.productList.map((product, index) => {
            let ret = [];
            if (index > 0) {
                ret.push(<Divider inset={true} key={`div-${index}`}/>);
            }
            ret.push(
                <ListItem
                    leftAvatar={<Avatar src={product.image} />}
                    primaryText={product['name']}
                    secondaryText={
                        <p>
                            <span style={{ color: 'black' }}>{product['product_code']}</span> --
                            {product['descriptions']}
                        </p>
                    }
                    secondaryTextLines={2}
                    key={`items-${product['code']}`}
                />
            )

            return ret;
        });

        return (
            <div>
                <List>
                    {items}
                </List>
            </div>
        )
    }
};

export default ProductDetailList;