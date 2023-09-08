class pageController {
    async index(req, res) {

        res.render("index", {
            data: req.body.data,
        })

    }





}

module.exports = new pageController();