const facade = require('../facade');

exports.exportMultiple = (req, res, next) => {
    facade.stealColors(req.query.images)
        .then(data => res.send(data))
        .catch(next);
};