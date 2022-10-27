const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());



const courses = require('./data/categories.json')
const category = require('./data/categories.json')
const details = require('./data/categories.json')
const checkout = require('./data/categories.json')


app.get('/course', (req, res) => {
    res.send(courses)
  })

app.get('/categories', (req, res) => {
    res.send(category)
  })

  app.get("/details/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedDetails = details.find((n) => ( n._id === id));
    console.log(selectedDetails);
    res.send(selectedDetails);
  });
  app.get("/details/checkout/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selected = checkout.find((n) => ( n._id === id));
    console.log(selected);
    res.send();
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })