const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()


// middle wars
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Vibe-Verse ON')
})

app.listen(port, () => {
    console.log(` Vibe-Verse ${port}`);
})