const ip = require("ip");

const getLocationMW = async (req, res, next) => {

    try {
        const langData = req.headers["accept-language"]; //get user's language data

        let lang = langData.split(",")[0] || "eng";

        req.body.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null; //get user's ip
        req.body.lang = lang;


        next();
    } catch (error) {
        next();

    }
}

module.exports = getLocationMW;