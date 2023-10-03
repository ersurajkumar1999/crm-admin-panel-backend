const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const router = require("./routes/users");

const PORT = 5000;

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", router);
mongoose.set('strictQuery', false);
async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error(err);
    }
}

// Call the async function to establish the MongoDB connection
connectToMongoDB();


app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});
