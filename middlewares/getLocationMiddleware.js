const ip = require("ip");

const getLocationMW = async (req, res, next) => {

    try {
        const langData = req.headers["accept-language"];

        let lang = langData.split(",")[0] || "eng";

        req.body.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
        req.body.lang = lang;


        next();
    } catch (error) {
        next();

    }
}

module.exports = getLocationMW;