// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var cors=require('cors')
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Static directory
// app.use(express.static("public"));




app.get("/",(req,res)=>{
  res.send("welcome")
})
app.get("/patients",(req,res)=>{
  db.Patient.findAll().then(data=>{
    console.log(data);
    res.json(data)
  })

})

app.get('/api/manager',(req,res)=>{
  db.Manager.findall().then(Manger=>{
    res.json(Manager)
  })
})
app.post('/api/patient',(req,res)=>{
  db.Patient.create(req.body).then(Patient=>{
    res.json(Patient)
  })
})
// Routes
// // =============================================================
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
