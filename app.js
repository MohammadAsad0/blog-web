//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const homePara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac turpis. Sed vulputate mi sit amet mauris commodo quis. Cursus in hac habitasse platea dictumst. Felis eget velit aliquet sagittis id. Nisi vitae suscipit tellus mauris a. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Euismod in pellentesque massa placerat duis ultricies lacus sed. Id cursus metus aliquam eleifend mi in nulla. Aliquet enim tortor at auctor urna nunc id cursus metus. Massa enim nec dui nunc mattis enim ut tellus elementum. Id aliquet lectus proin nibh. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Dui accumsan sit amet nulla facilisi morbi. In iaculis nunc sed augue lacus. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Urna nec tincidunt praesent semper. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Faucibus a pellentesque sit amet porttitor eget. Phasellus vestibulum lorem sed risus. Hendrerit dolor magna eget est lorem ipsum dolor sit. Ullamcorper a lacus vestibulum sed. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Dictum sit amet justo donec. Id aliquet risus feugiat in ante. In ornare quam viverra orci sagittis eu volutpat. Ut lectus arcu bibendum at varius vel pharetra. Vitae et leo duis ut. Diam maecenas sed enim ut sem viverra aliquet. Neque gravida in fermentum et sollicitudin. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Ut sem nulla pharetra diam sit.";
const aboutPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus. Sociis natoque penatibus et magnis dis parturient. Bibendum enim facilisis gravida neque convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Fames ac turpis egestas integer eget aliquet nibh. Sodales ut etiam sit amet nisl purus. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Morbi enim nunc faucibus a. Fames ac turpis egestas sed tempus urna et. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Quis blandit turpis cursus in hac habitasse platea. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Augue mauris augue neque gravida in fermentum et sollicitudin. Ac tincidunt vitae semper quis lectus nulla. Habitant morbi tristique senectus et netus et malesuada fames. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna ac placerat. Fermentum leo vel orci porta non pulvinar neque. Vitae auctor eu augue ut. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Neque convallis a cras semper auctor neque vitae tempus. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ut sem viverra aliquet eget sit amet. Ornare arcu dui vivamus arcu felis bibendum.";
const contactPara = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus. Sociis natoque penatibus et magnis dis parturient. Bibendum enim facilisis gravida neque convallis. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Fames ac turpis egestas integer eget aliquet nibh. Sodales ut etiam sit amet nisl purus. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Morbi enim nunc faucibus a. Fames ac turpis egestas sed tempus urna et. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Quis blandit turpis cursus in hac habitasse platea. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Augue mauris augue neque gravida in fermentum et sollicitudin. Ac tincidunt vitae semper quis lectus nulla.";
const blogs = [];

app.get("/",function(req,res){
    res.render("home",{para: homePara,newBlogs: blogs});
});

app.get("/about",function(req,res){
    res.render("about",{para: aboutPara});
});

app.get("/contact",function(req,res){
    res.render("contact",{para: contactPara});
});

app.get("/compose",function(req,res){
    res.render("compose");
});

app.get("/post/:title",function(req,res){
    blogs.forEach(function(blog){
        if((_.lowerCase(blog.title)) === (_.lowerCase(req.params.title)) || _.toLower(blog.title) === _.toLower(req.params.title)) {
            res.render("post",{thisPost: blog})
        }
    });
});


app.post("/compose",function(req,res){
    const post = {
        title: req.body.title,
        body: req.body.blog
    };

    blogs.push(post);
    res.redirect("/");
});



app.listen(3000,function() {
    console.log("server running on port 3000");
});