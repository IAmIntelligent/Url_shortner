const app = require("express")()
const mongoose = require("mongoose")
const shortUrl = require("./models/shortUrl")


mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs")

app.get("/", async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', {shortUrls:shortUrls})


})
app.post("/shortUrls", async (req, res) => {
    await shortUrl.create({full: req.body.fullUrl})
    res.redirect("/")
})

app.listen(3000)