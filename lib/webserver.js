const path = require('path');
const express = require('express');

module.exports = class Webserver {
    constructor(config) {
        const app = express();

        app.use(express.static(path.join(__dirname, '..')));

        app.get('/scontents', (req, res) => {
            config.mixer.scontents().then(data => {
                res.json(data);
            });
        });

        app.get('/sset', (req, res) => {
            config.mixer.sset(req.query.name, req.query.left, req.query.right).then(output => {
                res.status(200);
                res.send(output);
            }).catch(error => {
                res.status(500);
                res.send(error.message);
            });
        });

        app.listen(Number(config.port), () => {
            console.log('http server listening on port ' + config.port);
        });
    }
};
