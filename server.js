const express = require("express");
const app = express();
const path = require("path");
// const MongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb+srv://aery:icu4u24me@cluster0.lglnz.mongodb.net/";
const dbName = "Nitin_User";

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Parse JSON-encoded bodies
app.use(express.json());

// Define a route to render the index.ejs file
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/api/saveData", async (req, res) => {
    const data = req.body;

    try {
        if (!data) throw Error("Data is empty");
        // const client = await MongoClient.connect(mongoUrl);
        // const db = client.db(dbName);
        const collection = db.collection("myCollection"); // Replace with your desired collection name

        const result = await collection.insertOne(data);
        // client.close();

        console.log("Data saved to MongoDB:", JSON.stringify(result));
        res.status(200).json({ message: "Data saved successfully." });
    } catch (err) {
        console.error("Error saving data to MongoDB:", err);
        res.status(500).json({ message: "Failed to save data to the database." });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
