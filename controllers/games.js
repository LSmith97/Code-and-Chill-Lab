const Game = require("../models/game");


module.exports = {
    index,
    new: newGame,
    create,
}

function index (req, res, next) {
    res.render('games/index', {
        title: "All Games"
    });
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