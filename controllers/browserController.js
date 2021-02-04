// const isAuthenticated = require('../utils/middleware').isAuthenticated;
const router = require('express').Router();
const axios = require('axios');

router.post('/translate', function (req, res) {
    axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2', {
        format: 'text',
    }, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept-encoding': 'application/gzip',
            'x-rapidapi-key': '2ec7e6775cmsh5864e9b8b1fc24cp1e4a90jsn0d8cfe5c5551',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
        },
        data: { q: req.body.text, source: 'en', target: req.body.lang }
    }).then(res => {
        let translateList = res.data.data;
        res.json({
            result: translateList.translations[0].translatedText
        });
    }).catch(error => {
        console.log(error.data);
    });

});



module.exports = router;

