const ip = require("ip");

const getLocationMW = async (req, res, next) => {

    try {
        const langData = req.headers["accept-language"];

        let lang = langData.split(",")[0] || "eng";

        req.body.ip = req.ip || req.connection.remoteAddress || null;
        console.log(req.body.ip)
        req.body.lang = lang;


        next();
    } catch (error) {
        next();

    }
}

module.exports = getLocationMW;