const express = require('express')
const app = express()
const port = 3000
const homePage = '/views/index.html'
const aboutPage = '/views/about.html'
const contactPage = '/views/contact.html'
const galleryPage = '/views/gallery.html'

app.use(express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname + homePage)
})

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + aboutPage)
})

app.get('/contact', (req, res, next) => {
  res.sendFile(__dirname + contactPage)
})

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + galleryPage)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
