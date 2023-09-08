const axios = require('axios');
require('dotenv').config();



function noIP(lang) {
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=new%20york&lang=${lang}`)
}
function getWithLocation(location, lang) {
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${location}&lang=${lang}`)
}

function checkerArm(location, lang, req, res, next) {
    getWithLocation(location, lang).then(get => {
        req.body.data = get.data;
        next();
    }).catch(error => {
        noIP(lang).then(get => {
            req.body.data = get.data;
            next();
        }).catch(error => {
            res.json(error)
        });
    });
}

const getWeather = async (req, res, next) => {

    let gIP = req.body.ip;
    let gLocation = req.body.location;
    let gLang = req.body.lang;

    if (req.query.q == undefined) {  //eğer q ile lokasyon bilgisi gelmez ise

        if (gLocation == undefined) {
            checkerArm(gIP, gLang, req, res, next);//ip ile konum bulma

        } else {
            checkerArm(gLocation, gLang, req, res, next);//kordinat ile konum bulma
        }


    } else {
        checkerArm(req.query.q, gLang, req, res, next);//q ile konum bulma
    }






}

module.exports = getWeather;