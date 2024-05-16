const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://bewinshaji01:bewin1302@cluster0.e6nzcye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const DataModel = mongoose.model("Data", dataSchema);

app.use(bodyParser.json());

// Endpoint to save data
app.post("/api/data", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newData = new DataModel({ name, email, password });
    await newData.save();
    res.status(201).json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "An error occurred while saving data." });
  }
});

// Endpoint to retrieve data in table format
app.get("/api/data", async (req, res) => {
  try {
    const data = await DataModel.find();

    // Constructing HTML table
    let htmlResponse = "<table border='1'>";
    htmlResponse += "<tr><th>Name</th><th>Email</th><th>Password</th></tr>";
    data.forEach((item) => {
      htmlResponse += `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.password}</td></tr>`;
    });
    htmlResponse += "</table>";

    res.send(htmlResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
