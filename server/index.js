require("dotenv").config();

const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
const colleges = db.collection("colleges");

// Manual Data Insert JSON data
const data = [
	{
		image: "college1.jpg",
		name: "College 1",
		rating: 4.5,
		admissionDate: "August 2023",
		researchNumber: 150,
		events: ["Event 1", "Event 2", "Event 3"],
		sportsFacilities: [
			"Sports Facility 1",
			"Sports Facility 2",
			"Sports Facility 3",
		],
	},
	{
		image: "college2.jpg",
		name: "College 2",
		rating: 4.2,
		admissionDate: "September 2023",
		researchNumber: 120,
		events: ["Event A", "Event B", "Event C"],
		sportsFacilities: ["Sports Facility A", "Sports Facility B"],
	},
	{
		image: "college3.jpg",
		name: "College 3",
		rating: 4.8,
		admissionDate: "July 2023",
		researchNumber: 180,
		events: ["Event X", "Event Y", "Event Z"],
		sportsFacilities: [
			"Sports Facility X",
			"Sports Facility Y",
			"Sports Facility Z",
		],
	},
	{
		image: "college4.jpg",
		name: "College 4",
		rating: 4.0,
		admissionDate: "October 2023",
		researchNumber: 90,
		events: ["Event P", "Event Q"],
		sportsFacilities: [
			"Sports Facility M",
			"Sports Facility N",
			"Sports Facility O",
		],
	},
	{
		image: "college5.jpg",
		name: "College 5",
		rating: 4.6,
		admissionDate: "November 2023",
		researchNumber: 200,
		events: ["Event G", "Event H", "Event I"],
		sportsFacilities: ["Sports Facility D", "Sports Facility E"],
	},
	{
		image: "college6.jpg",
		name: "College 6",
		rating: 4.4,
		admissionDate: "December 2023",
		researchNumber: 130,
		events: ["Event R", "Event S"],
		sportsFacilities: ["Sports Facility K", "Sports Facility L"],
	},
];

// Insert the data into the database
// const result = await threeCollege.insertMany(data);

// Server Running Home Route
app.get("/", async (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");
	// const result = await colleges.insertMany(data);
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

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
