// const isAuthenticated = require('../utils/middleware').isAuthenticated;
const router = require('express').Router();
const axios = require('axios');

router.post('/translate', function (req, res) {
    // axios.post('https://google-translate1.p.rapidapi.com/language/translate/v2', {
    //     format: 'text',
    // }, {
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'accept-encoding': 'application/gzip',
    //         'x-rapidapi-key': '2ec7e6775cmsh5864e9b8b1fc24cp1e4a90jsn0d8cfe5c5551',
    //         'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
    //     },
    //     data: { q: req.body.text, source: 'en', target: req.body.lang }
    // }).then(res => {
    //     let translateList = res.data.data;
    //     res.json({
    //         result: translateList.translations[0].translatedText
    //     });
    // }).catch(error => {
    //     console.log(error.data);
    // });

    var options = {
        method: 'POST',
        url: 'https://google-translate20.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-rapidapi-key': 'cb99ffe4b8msh202505c739c96ccp1bcf8ejsn316c3096288a',
            'x-rapidapi-host': 'google-translate20.p.rapidapi.com'
        },
        data: {
            text: 'The POST method has several advantages over GET: it is more secure because most of the request is hidden from the user; Suitable for big data operations.',
            tl: 'es',
            sl: 'en'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
});



module.exports = router;

