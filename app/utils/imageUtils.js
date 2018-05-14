var path = require('path');
const fs = require('fs');

const imageFolder = path.resolve(__dirname, 'images');

export const getImageSrc = url => {
    if (url.startsWith('http' || url.startsWith('/'))) {
        return url;
    } else {
        return path.resolve(imageFolder, url);
    }
}