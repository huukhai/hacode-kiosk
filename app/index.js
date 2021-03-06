import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import { addProduct, pushAllProducts } from './actions/products';

const fs = require('fs');
import * as fileUtils from './utils/fileUtils';

const store = configureStore();

console.log('process.env: ', process.env)

try {
  let products = JSON.parse(fs.readFileSync(fileUtils.getDataFile()));
  store.dispatch(pushAllProducts(products));
} catch (ex) {
  console.error(ex);
  let products = {
    "1": {
      "name": "Máy in mã vạch",
      "image": "https://product.hstatic.net/1000246569/product/may-in-hoa-don-apos-250-2_master.jpg",
      "data": [
        {
          "code": "hacode01",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1100 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode02",
          "name": "Máy in mã vạch hacode 02",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 02",
          "image": "nhk.jpg",
          "product_code": "EZ1102 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode03",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1103 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode04",
          "name": "Máy in mã vạch hacode 04",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 04",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1104 Plus",
          "pdf": "test2.pdf"
        },
        {
          "code": "hacode05",
          "name": "Máy in mã vạch hacode 05",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 05",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1105 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode06",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1106 Plus",
          "pdf": "test.pdf"
        }
      ]
    },
    "2": {
      "name": "Máy in mã vạch 2",
      "image": "https://product.hstatic.net/1000246569/product/may-quet-ma-vach-qbt2430__1__c8247b68b50a4c2c80e1cb0c12c9a32d_master.jpg",
      "data": [
        {
          "code": "hacode01",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1107 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode02",
          "name": "Máy in mã vạch hacode 02",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 02",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1108 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode03",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1109 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode06",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1110 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode07",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1107 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode08",
          "name": "Máy in mã vạch hacode 02",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 02",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1108 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode09",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1109 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode10",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1110 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode11",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1107 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode12",
          "name": "Máy in mã vạch hacode 02",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 02",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1108 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode13",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1109 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode14",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1110 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode15",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1107 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode16",
          "name": "Máy in mã vạch hacode 02",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 02",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1108 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode17",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1109 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode18",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://www.w3schools.com/css/img_lights.jpg",
          "product_code": "EZ1110 Plus",
          "pdf": "test.pdf"
        }
      ]
    },
    "3": {
      "name": "Máy in mã vạch 3",
      "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez-2150_abe09b9a526e48dd888cba9c488a5ed2_master.jpg",
      "data": [
        {
          "code": "hacode01",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1111 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode03",
          "name": "Máy in mã vạch hacode 03",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 03",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1112 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode04",
          "name": "Máy in mã vạch hacode 04",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 04",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1113 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode05",
          "name": "Máy in mã vạch hacode 05",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 05",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1114 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode06",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1115 Plus",
          "pdf": "test.pdf"
        }
      ]
    },
    "4": {
      "name": "Máy in mã vạch 4",
      "image": "https://product.hstatic.net/1000246569/product/dau-doc-ma-vach-hf600_master.jpg",
      "data": [
        {
          "code": "hacode01",
          "name": "Máy in mã vạch hacode 01",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 01",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1116 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode05",
          "name": "Máy in mã vạch hacode 05",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 05",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1117 Plus",
          "pdf": "test.pdf"
        },
        {
          "code": "hacode06",
          "name": "Máy in mã vạch hacode 06",
          "descriptions": "Đây là máy in mã vạch mang thương hiệu Hacode 06",
          "image": "https://product.hstatic.net/1000246569/product/may-in-ma-vach-godex-ez1100-plus_master.jpg",
          "product_code": "EZ1118 Plus",
          "pdf": "test.pdf"
        }
      ]
    }
  }

  store.dispatch(pushAllProducts(products));
}

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
