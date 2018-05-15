//var path = require('path');
const fs = require('fs');

const { app } = require('electron').remote;
const path = require('path');
const rootFolder = process.env.NODE_ENV === 'development'
    ? process.cwd()
    : path.resolve(app.getAppPath(), '../');

console.log('AppPath: ', rootFolder)

const dataRoot = path.resolve(rootFolder, 'kiosk-data');
const imageFolder = path.resolve(dataRoot, 'images');
const dataFile = path.resolve(dataRoot, 'data.json');
const pdfFolder = path.resolve(dataRoot, 'pdf');
const slideFolder = path.resolve(dataRoot, 'slide');

let lstPdf = {}
// fs.readdir(pdfFolder, (err, files) => {
//     files.forEach(file => {
//         let pdf = require(`../pdf/${file}`);
//         lstPdf[file] = pdf;
//     });
// })

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

export const getListPdf = () => {
    return lstPdf;
}

export const getImage = name => {
    return path.resolve(imageFolder, name);
}

export const getPdf = name => {
    return path.resolve(pdfFolder, name);
}

export const getPdfBase64 = name => {
    return base64_encode(path.resolve(pdfFolder, name));
}

export const getPdfBinary = name => {
    return fs.readFileSync(path.resolve(pdfFolder, name));
}

export const getDataFile = () => {
    return dataFile;
}

export const getSlideImages = async () => {
    let files = await fs.readdirSync(slideFolder);
    files = files.map(file => ({ src: getSlideImage(file), altText: "", caption: "", header: "" }));
    return files;
}

export const getSlideImage = name => {
    if (name.startsWith('http') || name.startsWith('/')) {
        return name;
    } else {
        return `${slideFolder}/${name}`;
    }
}