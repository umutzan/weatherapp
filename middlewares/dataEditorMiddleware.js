const getLocationMW = async (req, res, next) => {

    try {

        let oldData = req.body.data;

        let newData = {
            "location": {
                "city": oldData.location.name + ", " + oldData.location.region,
                "country": oldData.location.country || "",
            },
            "temp": {
                "c": oldData.current.temp_c,
                "f": oldData.current.temp_f,
            },
            "cond": {
                "text": oldData.current.condition.text || "",
                "icon": oldData.current.condition.icon || "",
            },

            "wind": {
                "speed": {
                    "mil": oldData.current.wind_mph,
                    "km": oldData.current.wind_kph,
                },
                "dir": {
                    "deg": oldData.current.wind_degree,
                    "c16": oldData.current.wind_dir,

                }
            }

        }
        req.body.data = newData;

        next();



    } catch (error) {
        res.json({ error: error })

    }
}

module.exports = getLocationMW;