const facade = require('../facade');

exports.exportMultiple = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    facade.stealColors(req.query.images)
        .then(data => res.send(data))
        .catch(next);
};