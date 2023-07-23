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

// Manual Data Insert JSON data
const data = [
	{
		college_name: "University of XYZ",
		reviewer_name: "John Doe",
		review_date: "July 15, 2023",
		rating: 4,
		review_title: "Great Academics, Lively Campus",
		review_content:
			"I had an amazing experience at the University of XYZ! The academics were top-notch, and the professors were knowledgeable and supportive. The campus life was vibrant, with plenty of clubs and events to get involved in.",
	},
	{
		college_name: "ABC College",
		reviewer_name: "Jane Smith",
		review_date: "July 20, 2023",
		rating: 3,
		review_title: "Beautiful Campus, Lackluster Facilities",
		review_content:
			"ABC College has a beautiful campus with lush greenery, but I was disappointed with the facilities. The dorms were outdated, and some classrooms lacked proper equipment. The professors were generally good, but the administration could improve their responsiveness to student concerns.",
	},
	{
		college_name: "XYZ Institute of Technology",
		reviewer_name: "Sarah Johnson",
		review_date: "July 18, 2023",
		rating: 5,
		review_title: "Outstanding Engineering Program",
		review_content:
			"As an engineering student, I can confidently say that XYZ Institute of Technology offers one of the best engineering programs in the country. The faculty is highly knowledgeable, and the hands-on projects prepared me well for real-world challenges.",
	},
	{
		college_name: "Sunshine University",
		reviewer_name: "Michael Williams",
		review_date: "July 22, 2023",
		rating: 2,
		review_title: "Disorganized Administration, Average Education",
		review_content:
			"My experience at Sunshine University was not as great as I had hoped. The administration seemed disorganized, and there were frequent delays in processing paperwork. The quality of education was average, and some classes felt overcrowded. ",
	},
	{
		college_name: "Arts & Design Institute",
		reviewer_name: "Emily Lee",
		review_date: "July 16, 2023",
		rating: 4,
		review_title: "Creativity and Supportive Faculty",
		review_content:
			"As a student of the Arts & Design Institute, I loved the creative atmosphere. The professors were not only skilled artists but also great mentors, always ready to provide feedback and encouragement. The facilities were well-equipped for artistic pursuits..",
	},
	{
		college_name: "Business Academy",
		reviewer_name: "Robert Davis",
		review_date: "July 19, 2023",
		rating: 3,
		review_title: "Decent Business Program, Limited Extracurriculars",
		review_content:
			"The Business Academy offered a decent business program with some great professors, but I felt that it lacked a well-rounded experience. There were limited extracurricular activities related to business and entrepreneurship.",
	},
];

// Insert the data into the database
// const result = await threeCollege.insertMany(data);

// Server Running Home Route
app.get("/", async (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");

	// const result = await collegeFeedback.insertMany(data);
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

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
