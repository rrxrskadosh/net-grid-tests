const express = require("express");
const router = express.Router();

let boards = [{
    "id": 1,
    "stage": 1,
    "title": "Create a new project"
}]

router.route("/boards").get((req, res) => {
    res.json(boards)
});

//Create an board (POST)
router.route("/boards").post((req, res) =>{
    const board = req.body

    const ids = boards.map(board => board.id)
    const maxId = Math.max(...ids)

    const newBoard = {
        id: maxId + 1,
        stage: 1,
        title: board.title
    }
    boards = [...boards, newBoard]
    res.json(newBoard)
    res.status(201).end()
});

router.route("boards/:id").put((req, res) =>{
    const item = boards.find(item => item.id === req.body.id);
    const index = boards.indexOf(item);
    boards[index] = req.body;
});


module.exports = router;
