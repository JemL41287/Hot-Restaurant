// Dependencies
const express = req("express");

//Set up Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Variables

const reserve = [];
const waitList = [];


// Routes
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


//send api
app.get("/api/tables", (req, res) => {
    return res.json(reserve);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitList);
});



app.post("/reserve", function (req, res) {
    var newReservation = req.body
});




// Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
