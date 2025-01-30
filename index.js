import express from "express";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    const response = {
        email: "akinjejikolawoleraphael@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Kollarztune1/HNG-stage0-public-api"
  };
 
  res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });