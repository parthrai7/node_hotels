const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //it automatically stores data in req.body

const Person = require('./models/Person');
const menuitems = require('./models/menuitems');



app.get('/', function (req, res) {
  res.send('Hello party')
});



app.post('/person', async (req, res) => {
    try {
        const data = req.body;

       

        const response = await Person.insertMany(data); // Insert multiple records
        console.log("Data saved:", response);
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/person', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetch:");
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(3000, ()=>{
    console.log("server 3000 is live");
})
app.post('/menuitems',async (req,res)=>{
    try{
        const menu = req.body;
        const items = await menuitems.insertMany(menu);
        console.log("Items Updated");
        res.status(200).json(items);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/menuitems', async(req,res)=>
{try{
    const data = await menuitems.find();
    console.log("Items Updated");
        res.status(200).json(data);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
