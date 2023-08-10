const Game = require("../models/game");

module.exports = {
   create
}

async function create (req,res) {
    try {
        const reviewData = {...req.body}
        reviewData.time = new Date()
        const reviewGame = await Game.findById(req.params.id)
        reviewGame.reviews.push(reviewData)
        await reviewGame.save()
        res.redirect(`/games/${reviewGame._id}`)
    } catch (error) {
        console.log(error)
    }
}