// const isAuthenticated = require('../utils/middleware').isAuthenticated;
// const router = require('express').Router();

// router.get('/business', isAuthenticated, function (req, res) {

// }
const axios = require('axios');

axios({
    'method': 'GET',
    'url': 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    'headers': {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'x-rapidapi-key': '2da24030famsh592d665666d0ea2p1edb49jsn833747c26838',
        'accept-encoding': 'application/gzip',
        'useQueryString': true
    }
})
    .then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });