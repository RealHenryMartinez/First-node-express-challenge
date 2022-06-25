// CODE STARTS HERE

// bringing in Express
var express = require('express');
var path = require('path')
var app = new express();
const jsonwebtoken = require("jsonwebtoken");
// port can be any number 3000-8000
var port = 7777;


// 401 Status code
app.get("/", (req, res) => {
    res.status(401).json({message: "Unauthorized Access", status: 401});
    
  });

app.get("/error", (req, res) => {
    res.status(401).json({message: "Unauthorized Access", status: 401});
    
  });




app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/home.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/component/contact.html'));
});



// IGNORE CODE BELOW HERE //

// app.get(express-jwt({
//     fail: function (req, res, next) {
//        if (!req.headers.authorization) res.send(400, 'missing authorization header');
//        res.send(401);
//     }
//  }));

// app.get('/', (req, res) => {
//     res.status(401).send(UnauthorizedError);

// });

// app.status(401);
// app.send("string");




// app.use((req, res, next) => {
//         const err = new Error("Unauthorized")
//         err.status = 401
//         next(err)

    
// });


// app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         error: {
//             status: err.status || 500,
//             message: "Unauthorized Access"
//         }
//     })
// });

// router.use((req, res, next) => {
//     if (!req.user) {
//      res.status(401).json({ error: 'Unauthorized' });
//      return;
//     }
   
//     next();
//    });

// app.use(express.jwt({
//     fail: function (req, res, next) {
//        if (!req.headers.authorization) res.send(400, 'missing authorization header');
//        res.send(401);
//     }
//  }));

// res.status(401).send('No access!');



app.listen(port, function(){
    console.log("from", port);
})

// const JWT_SECRET =
//   "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

// app.use(express.json());

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   console.log(`${username} is trying to login ..`);

//   if (username === "admin" && password === "admin") {
//     return res.json({
//       token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
//     });
//   }

//   return res
//     .status(401)
//     .json({ message: "The username and password your provided are invalid" });
// });
