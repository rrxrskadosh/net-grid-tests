const { response } = require('express');
const express = require('express');
const v1Router = require("./routes/v1/boards");


const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('<h1 style="text-align:center;">API Kanban</h1>');
})
app.use("/", v1Router);

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})