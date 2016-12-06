const ColorThief = require('color-thief');
const request = require('request-promise');
const _ = require('lodash');
const colorThief = new ColorThief();

exports.stealColors = (images) => {
    return Promise.all(_.map(images, image => exports.stealColor(image)));
};

exports.stealColor = (url) => {
    return request({
        uri: url,
        encoding: null
    })
        .then(buffer => colorThief.getColor(buffer));
};