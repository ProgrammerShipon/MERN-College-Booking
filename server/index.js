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
const researchedPaper = db.collection("researchedPaper");
const collegeFeedback = db.collection("collegeFeedback");
const usersCollection = db.collection("users");

// Manual Data Insert JSON data
const data = [
	{
		id: 1,
		name: "Harvard University",
		rating: 4.5,
		admissionDate: "2023-08-15",
		research: [
			"Advanced Materials Engineering",
			"Biotechnology Innovations in Medicine",
		],
		sportsFacilities: [
			"Indoor Swimming Pool",
			"Basketball Court",
			"Tennis Courts",
			"Track and Field",
		],
		events: ["Annual Science Fair", "Cultural Fest", "Hackathon"],
		description:
			"Harvard University is a private Ivy League research university in Cambridge, Massachusetts. It is renowned for its academic excellence and has a rich history dating back to 1636.",
		location: "Cambridge, Massachusetts, USA",
		type: "Private",
		contactInfo: {
			email: "admissions@harvard.edu",
			phone: "+1 (617) 495-1551",
		},
		image:
			"https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
	},
	{
		id: 2,
		name: "Stanford University",
		rating: 4.2,
		admissionDate: "2023-09-01",
		research: [
			"Artificial Intelligence and Machine Learning",
			"Environmental Sustainability Solutions",
		],
		sportsFacilities: [
			"Fitness Center",
			"Soccer Field",
			"Baseball Diamond",
			"Volleyball Court",
		],
		events: ["Tech Expo", "Literary Festival", "Innovation Summit"],
		description:
			"Stanford University is a leading research institution in California, known for its cutting-edge technology programs and innovative research across various disciplines.",
		location: "Stanford, California, USA",
		type: "Private",
		contactInfo: {
			email: "admissions@stanford.edu",
			phone: "+1 (650) 723-2091",
		},
		image:
			"https://www.nps.gov/common/uploads/cropped_image/primary/A7937373-D12D-9EB4-CBF49131F8969E1E.jpg?width=1600&quality=90&mode=crop",
	},
	{
		id: 3,
		name: "Massachusetts Institute of Technology (MIT)",
		rating: 4.8,
		admissionDate: "2023-08-25",
		research: [
			"Nanotechnology and Nanomaterials",
			"Renewable Energy and Clean Technologies",
		],
		sportsFacilities: [
			"Olympic-size Swimming Pool",
			"Basketball Court",
			"Football Field",
			"Tennis Courts",
		],
		events: ["Research Symposium", "Music Concert", "Innovation Fair"],
		description:
			"Massachusetts Institute of Technology (MIT) is a prestigious private research university with a focus on science, engineering, and technology. It is located in Cambridge, Massachusetts, and is known for its cutting-edge research and innovative approach to education.",
		location: "Cambridge, Massachusetts, USA",
		type: "Private",
		contactInfo: {
			email: "admissions@mit.edu",
			phone: "+1 (617) 253-1000",
		},
		image:
			"https://www.worldatlas.com/r/w1200/upload/c2/a9/3e/shutterstock-82987126.jpg",
	},
	{
		id: 4,
		name: "California Institute of Technology (Caltech)",
		rating: 4.3,
		admissionDate: "2023-09-05",
		research: [
			"Aerospace Engineering and Space Sciences",
			"Quantum Information and Computing",
		],
		sportsFacilities: [
			"Gymnasium",
			"Soccer Field",
			"Tennis Courts",
			"Swimming Pool",
		],
		events: [
			"Space Exploration Symposium",
			"Tech Showcase",
			"Annual Sports Day",
		],
		description:
			"California Institute of Technology (Caltech) is a world-renowned private research university specializing in science and engineering. It is located in Pasadena, California, and has a strong emphasis on cutting-edge research and innovation.",
		location: "Pasadena, California, USA",
		type: "Private",
		contactInfo: {
			email: "admissions@caltech.edu",
			phone: "+1 (626) 395-6811",
		},
		image:
			"https://transitinglosangeles.files.wordpress.com/2021/01/20210126_120500.jpg?w=1568",
	},
	{
		id: 5,
		name: "University of Cambridge",
		rating: 4.7,
		admissionDate: "2023-08-20",
		research: [
			"Medicine and Life Sciences",
			"Artificial Intelligence and Robotics",
		],
		sportsFacilities: [
			"Rowing Club",
			"Cricket Ground",
			"Swimming Pool",
			"Tennis Courts",
		],
		events: [
			"Cambridge Science Festival",
			"Cultural Extravaganza",
			"Intercollegiate Sports Meet",
		],
		description:
			"The University of Cambridge is a prestigious public research university in Cambridge, England. It is one of the oldest and most esteemed educational institutions in the world, known for its rigorous academic programs and diverse research areas.",
		location: "Cambridge, England, UK",
		type: "Public",
		contactInfo: {
			email: "enquiries@admin.cam.ac.uk",
			phone: "+44 (0) 1223 337733",
		},
		image:
			"https://www.visitcambridge.org/app/uploads/2021/11/corpus-christi-1600x0-c-default.jpg",
	},
	{
		id: 6,
		name: "Yale University",
		rating: 4.1,
		admissionDate: "2023-09-10",
		research: [
			"History and Archaeology",
			"Neuroscience and Cognitive Sciences",
		],
		sportsFacilities: [
			"Yale Bowl (Football Stadium)",
			"Basketball Court",
			"Tennis Courts",
			"Track and Field",
		],
		events: ["Yale Art Walk", "Music on the Green", "Sports Day"],
		description:
			"Yale University is a prestigious private research university located in New Haven, Connecticut. It is known for its excellence in various academic fields and offers a wide range of research opportunities to its students.",
		location: "New Haven, Connecticut, USA",
		type: "Private",
		contactInfo: {
			email: "admissions@yale.edu",
			phone: "+1 (203) 432-4771",
		},
		image:
			"https://www.kenznow.com/uploads/uni_cover_pic/121846725c9a17f5af27d3387ac916ca.jpg",
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

// gallery image
app.get("/gallery-image", async (req, res) => {
	const result = await galleryImage.find().toArray();
	res.send(result);
});

// Admission Form data college
app.post("/admission-form/:id", async (req, res) => {
	const { id } = req.params;
	console.log("admission form id -> ", id);
	const query = { _id: new ObjectId(id) };
	const result = await colleges.findOne(query);
	res.send(result);
});

// Research Papers
app.get("/research-papers", async (req, res) => {
	const result = await researchedPaper.find().toArray();
	res.send(result);
});

// College Feedback
app.get("/college-feedback", async (req, res) => {
	const result = await collegeFeedback.find().toArray();
	res.send(result);
});

app.post("/users", async (req, res) => {
	const user = req.body;
	console.log("user email -> ", user);
	// Checking the user
	const query = { email: user.email };
	const existingUser = await usersCollection.findOne(query);
	if (existingUser) {
		return res.send({ message: "User already exists" });
	}

	const result = await usersCollection.insertOne(user);
	res.send(result);
});

app.get("/profile-users/:email", async (req, res) => {
	const { email } = req.params;
	// Checking the user
	const query = { email: email };
	const existingUser = await usersCollection.findOne(query);
	res.send(existingUser);
});

// Profile Update
app.patch("/profile-updates/:id", async (req, res) => {
	const { id } = req.params;
	const updatedData = req.body;

	console.log("updatedData -> ", updatedData);
	console.log("update email -> ", id);
	// Checking the user

	const query = { _id: new ObjectId(id) };
	const updateDoc = { $set: updatedData };
	const result = await usersCollection.updateOne(query, updateDoc);

	res.send(result);
});

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
