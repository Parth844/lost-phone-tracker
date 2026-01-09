const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/location", (req, res) => {
  const { latitude, longitude, time } = req.body;

  console.log("📍 LOCATION RECEIVED");
  console.log("Latitude :", latitude);
  console.log("Longitude:", longitude);
  console.log("Time     :", time);
  console.log("Google Map:",
    `https://www.google.com/maps?q=${latitude},${longitude}`
  );
  console.log("------------------------------");

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
