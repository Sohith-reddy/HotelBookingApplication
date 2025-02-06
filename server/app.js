const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const Campground = require('./models/Campground')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch(() => {
        console.log("Not Connected to MongoDB");
})

app.get('/getCampground', async (req, res) => {
    try {
        const response = await Campground.find();
        if (response) {
            res.status(200).json(response);
        }
        else {
            res.status(404).json({message:"Cannot Fetch the Campgrounds"});
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
})

app.post('/makeCampground', async (req, res) => { 
    try {
        const campground = new Campground(req.body);
        await campground.save();
        if (campground) {
            res.status(201).json(campground);
        }
        else {
            res.status(404).json({ message: "Campground not created" });
        }
    } catch (error) {
        console.log("Error making campground", error);
        res.status(500).json({ message: "Internal Server Error" });   
    }
})


const PORT= process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})
