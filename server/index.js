require("dotenv").config();

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 6060;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority`;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

// Mongodb Connected Function
const dbConnect = async () => {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Mongodb connected Success");
	} finally {
		//   await client.close();
	}
};
dbConnect();

// Mongodb Data Collections
const db = client.db("MERN-College-Booking");
const threeCollege = db.collection("threeCollege");

// Manual Data Insert JSON data
// const data = [];
// Insert the data into the database
// const result = await threeCollege.insertMany(data);

// Server Running Home Route
app.get("/", (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");
});

// three college
app.get("/three-college", async (req, res) => {
	const result = await threeCollege.find().toArray();
	res.send(result);
});

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
