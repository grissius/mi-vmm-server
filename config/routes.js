const colorExporter = require('../controllers/colorExporter');

module.exports = app => {

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        next();
    });

    app.get('/hello', (req, res, next) => {
        res.status(200);
        res.json(req.query);
    });

    app.get('/steal-color', colorExporter.exportMultiple);
};