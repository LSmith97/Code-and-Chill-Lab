
module.exports = {
    index
}

function index (req, res, next) {
    res.render('games/index', {
        title: "All Games"
    });
  }