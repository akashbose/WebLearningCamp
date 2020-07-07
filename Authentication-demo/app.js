var express                 =require("express"),
    mongoose                =require("mongoose"),
    passport                =require("passport"),
    bodyparser              =require("body-parser"),
    User                    =require("./models/user")
    localstrategy           =require("passport-local"),
    passportlocalMongoose   =require("passport-local-mongoose");
mongoose.connect("mongodb://localhost/auth_demo", { useNewUrlParser: true , useUnifiedTopology: true });
var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"I love you",
    resave:false,
    saveUninitialized:false
}));
app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//ROUTES

app.get("/",function(req,res){
    res.render("home");
});
app.get("/loggedon",function(req,res){
    res.render("loggedon");
});
app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register",function(req,res){
    console.log(req.body.username);
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
    
            passport.authenticate("local")(req,res,function(){
                res.redirect("/loggedon");
            });
    });
});



app.listen(3000,function(){
    console.log("server started......");
})