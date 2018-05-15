import * as fileUtils from './fileUtils';

export const getImageSrc = image => {
    if (image.startsWith('http') || image.startsWith('/')) {
        return image;
    } else {
        return fileUtils.getImage(image);
    }
}