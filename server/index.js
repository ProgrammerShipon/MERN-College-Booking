require("dotenv").config();

const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 6060;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.krol4pa.mongodb.net/?retryWrites=true&w=majority`;

const opt = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};
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
		client.connect();
		console.log("Database Connected Successfully✅");
	} catch (error) {
		console.log(error.message);
	}
};
dbConnect();

// Mongodb Data Collections
const db = client.db("MERN-College-Booking");
const threeCollege = db.collection("threeCollege");
const colleges = db.collection("colleges");
const galleryImage = db.collection("galleryImage");

// Insert the data into the database
// const result = await threeCollege.insertMany(data);

// Server Running Home Route
app.get("/", async (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");
	// const result = await galleryImage.insertMany(data);
	// console.log(result);
});

// three college
app.get("/three-college", async (req, res) => {
	const result = await threeCollege.find().toArray();
	res.send(result);
});

// threes single college
app.get("/three-college/:id", async (req, res) => {
	const { id } = req.params;
	console.log(id);
	const query = { _id: new ObjectId(id) };
	const result = await threeCollege.findOne(query);
	res.send(result);
});

// all college
app.get("/colleges", async (req, res) => {
	const result = await colleges.find().toArray();
	res.send(result);
});

// gallery image
app.get("/gallery-image", async (req, res) => {
	const result = await galleryImage.find().toArray();
	res.send(result);
});

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
