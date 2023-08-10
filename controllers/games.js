const Game = require("../models/game");


module.exports = {
    index,
    new: newGame,
    create,
    show,
    delete: removeGame,
    edit: editGame,
    update
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

async function removeGame(req,res) {
    console.log("remove game")
    try {
        await Game.deleteOne(Game.findById(req.params.id));
        res.redirect("/games")
    } catch (error) {
        console.log(error);
    }
}

async function editGame (req,res) {
    try {
        const editedGame = await Game.findById(req.params.id)
        const year = editedGame.releaseDate.getFullYear();
        const month = editedGame.releaseDate.getMonth().toString().length < 2 ? "0"+ (editedGame.releaseDate.getMonth()+1): editedGame.releaseDate.getMonth()+1;
        const day = editedGame.releaseDate.getDate().toString().length < 2 ? "0"+ editedGame.releaseDate.getDate(): editedGame.releaseDate.getDate();
        res.render('games/edit', {
            title: editedGame.name,
            editedGame,
            date: `${year}-${month}-${day}`
        })
    } catch (error) {
        console.log(error)
    }
}

async function update(req, res){
    try {
        const gameData = {...req.body}

        const editedGame = await Game.findById(req.params.id)
        editedGame.name = gameData.name;
        editedGame.rating = gameData.rating;
        editedGame.releaseDate = gameData.releaseDate;
        await editedGame.save();

        res.redirect(`/games/${req.params.id}`)
    } catch (error) {
        console.log(error)
    }
}