const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
    res.send('Coffee server is getting hotter.')
})


// Start the server
app.listen(3000, () => {
    console.log(`Coffer Server is running on ${port}`);
});