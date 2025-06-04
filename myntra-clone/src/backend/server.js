const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true
  },
});

const User = mongoose.model("User", UserSchema);

app.post("/api/login", async (req, res) => {
  const { mobile } = req.body;

  try {
    const user = new User({ mobile });
    await user.save();
    res.status(201).json({ message: " Mobile number saved successfully " });
  } catch (error) {
    res.status(500).json({ message: "Error saving number", error });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", error });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
