const Game = require("../models/game");


module.exports = {
    index,
    new: newGame,
    create,
    show
}

async function index (req, res, next) {
    try {
        const allGames = await Game.find({})
        res.render('games/index', {
            title: "All Games",
            allGames
        })
    } catch (error) {
        console.log(error)
    }
}

function newGame(req, res) {
    res.render('games/new',
    {
        title: "Add New Game"
    })
}

async function create(req, res) {
    const gameData = { ...req.body}

    try {
        const createdGame = await Game.create(gameData);
        res.redirect("/games");
    } catch (error) {
        console.log(error)
    }
}

async function show (req, res, next) {
    try {
        const foundGame = await Game.findById(req.params.id)
        res.render('games/show', {
            title: foundGame.name,
            foundGame
        })
    } catch (error) {
        console.log(error)
    }
}