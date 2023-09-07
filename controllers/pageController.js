class pageController {
    async index(req, res) {

        console.log(req.body.data)
        res.render("index", {
            data: req.body.data,
        })

    }





}

module.exports = new pageController();