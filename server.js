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
  res.send("logIn")
})
// app.get("/login",(req,res)=> {
//   res.render("login"); 
// })
// // signup page
// app.get("/signup",(req,res)=> {
//   res.render("login"); 
// })
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
app.get("/api/logbook/:id",(req,res)=>{
  db.Patient.findOne({
    where:{
      id:req.params.id
    }
  }).then(data=>{
    console.log(data);
    res.json(data)
  })

})

app.post('/api/patient',(req,res)=>{
  db.Patient.create(req.body).then(data=>{
    res.json(data)
  })
})




app.post('/api/logbook',(req,res)=>{
  db.LogBook.create(req.body).then(data=>{
    res.json(data)
  })
})

// ===========




// Get one patient By id
app.get('/patient/:id',(req,res)=>{
  const id=req.params.id;
  db.Patient.findOne({
    where:{id:id}})
.then(data =>{
  res.json(data)
}) 
 })



 app.get("/newEntry",(req,res)=>{
  db.Patient.findAll().then(data=>{
    console.log(data);
    res.json(data)
  })

})
 


 // POST single Patient
 app.post('/newEntry', (req, res) => {
  const lastname = req.body.lastname;
  const firstname=req.body.firstname
  const email = req.body.email;
  const phone_number=req.body.phone_number;
  const address=req.body.address

  db.Patient.create({
    lastname: lastname,
    firstname: firstname,
    email:email,
    phone_number:phone_number,
    address:address
  })
    .then(newPat => {
      res.json(newPat);
    })
});
 
    





// Routes
// // =============================================================
// require("./routes/post-api-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:false
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
