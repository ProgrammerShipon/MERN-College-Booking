const express = require("express");

const app = express();
const port = 6060;

app.get("/", (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");
});

app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
