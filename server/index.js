let express = require('express');

var app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log("server is listning on port 3000");
});

app.get("/customers", (req, res) => {
    res.send({
        id: 1,
        name: "Sufian"
    })
})