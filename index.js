import express from "express"
import bodyParser from "body-parser"

const port=3000;
const app=express();
var headingg=[];
var postt=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/post",(req,res)=>{
    res.render("post.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
})

app.get("/blog",(req,res)=>{
    res.render("blog.ejs",{post:postt,heading:headingg});
})

app.post("/blog",(req,res)=>{
    const heading=req.body["Heading"];
    const post=req.body["bloggg"];
    headingg.push(heading);
    postt.push(post);
    res.render("blog.ejs",{post:postt,heading:headingg});
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port} `);
})