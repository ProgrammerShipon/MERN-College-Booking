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

// Manual Data Insert JSON data
const data = [
	{
		title: "The Impact of Climate Change on Biodiversity",
		authors: [
			{
				name: "Shipon Hossen",
				image:
					"https://media.licdn.com/dms/image/D5603AQEiYjv2IVUnSg/profile-displayphoto-shrink_800_800/0/1688882807815?e=2147483647&v=beta&t=FbE3UxaaaayNQzajxQw8-5LEOLAvp4slooG-bqutoPc",
			},
			{
				name: "Sumon Ali",
				image:
					"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dccef04a4ee6680882c9dbe0b79eb0e9-1658314807373/11e9a13c-f3c3-4ff5-af42-b674a03fd790.jpg",
			},
		],
		abstract:
			"This research paper explores the consequences of climate change on various ecosystems and the implications for biodiversity conservation.",
		link: "https://www.climatechange.environment.nsw.gov.au/biodiversity#:~:text=Many%20impacts%20of%20climate%20change,and%20changes%20in%20farming%20productivity.",
		date: "2023-06-15",
	},
	{
		title:
			"Artificial Intelligence in Healthcare: Current Trends and Future Prospects",
		authors: [
			{
				name: "Tajibul islam Shohan",
				image:
					"https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/300416571_1911376365736742_9071875675321240673_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEYWvKSiGkmrS_LLgHptGKCBkzjHjXebv8GTOMeNd5u_0D7pudKKzSfRj7wsNd_TfY-XjZ9q_X4tszI_lHJJq1P&_nc_ohc=TI9Y_R6tbwMAX-qpJb_&_nc_ht=scontent.fdac138-2.fna&oh=00_AfCFuOUNbKcIwN49eh04upMw8Mfz6UUGJdq88KkRlsCX-Q&oe=64C0ED18",
			},
			{
				name: "Shipon Hossen Raju",
				image:
					"https://media.licdn.com/dms/image/D5603AQEiYjv2IVUnSg/profile-displayphoto-shrink_800_800/0/1688882807815?e=2147483647&v=beta&t=FbE3UxaaaayNQzajxQw8-5LEOLAvp4slooG-bqutoPc",
			},
		],
		abstract:
			"This paper discusses the applications of artificial intelligence in the healthcare industry, including diagnosis, treatment, and patient care.",
		link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5819974/",
		date: "2023-07-03",
	},
	{
		title:
			"Understanding the Psychological Effects of Social Media Usage among Adolescents",
		authors: [
			{
				name: "Jessica Williams",
				image:
					"https://media.licdn.com/dms/image/C4D03AQGUGGjd2UIJbA/profile-displayphoto-shrink_800_800/0/1646145793444?e=2147483647&v=beta&t=Pcc-YEq5MqXcf7gI1kzdDRVfP2jAF-7DzVUWfv33mMw",
			},
			{
				name: "David Rodriguez",
				image:
					"https://variety.com/wp-content/uploads/2020/11/david-rodriguez.jpg",
			},
		],
		abstract:
			"This study investigates the psychological impact of excessive social media use on adolescents' mental well-being and social behavior.",
		link: "https://www.frontiersin.org/articles/10.3389/fpsyg.2020.01949/full",
		date: "2023-07-10",
	},
	{
		title: "The Role of Renewable Energy in Sustainable Development",
		authors: [
			{
				name: "Emma Brown",
				image:
					"https://i.guim.co.uk/img/media/6151d2e0fbef792c9d0e0d9c25f1c5753fb148c5/72_8_618_371/master/618.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e92df2f67f0aecf51d1a17d8cd29d61a",
			},
			{
				name: "James Miller",
				image:
					"https://www.belfercenter.org/sites/default/files/styles/headshot_large_265x265_/public/images/person/headshot/James%20Miller%20Square.jpg?h=97c04a2e&itok=bFKKHaX9",
			},
		],
		abstract:
			"This research examines the contribution of renewable energy sources in achieving sustainable development goals and reducing carbon emissions.",
		link: "https://timesofindia.indiatimes.com/blogs/voices/the-role-of-renewable-energy-technologies-in-sustainable-development/",
		date: "2023-07-18",
	},
	{
		title: "Enhancing Data Security in Cloud Computing: A Comparative Analysis",
		authors: [
			{
				name: "Andrew Thompson",
				image:
					"https://www.balsillieschool.ca/wp-content/uploads/2021/09/Andrew-Thompson-2018-credit-Tomasz-Admanski-cropped-800x800-1.jpg",
			},
			{
				name: "Rachel White",
				image:
					"https://media.licdn.com/dms/image/D4E03AQH6fr1ZRr3uRw/profile-displayphoto-shrink_800_800/0/1665678646720?e=2147483647&v=beta&t=yBoqJlN1U-MgvWsLT-U_U-UfZeJLm9eWnytVSgDlv2M",
			},
		],
		abstract:
			"This comparative analysis evaluates various techniques to enhance data security in cloud computing environments and their effectiveness.",
		link: "https://www.researchgate.net/publication/309618359_Enhancing_Data_Security_in_Cloud_Computing_Using_a_Lightweight_Cryptographic_Algorithm",
		date: "2023-07-22",
	},
	{
		title:
			"The Influence of Parenting Styles on Academic Achievement of Children",
		authors: [
			{
				name: "Jennifer Davis",
				image:
					"https://www.maisonchs.com/files/images/agents/d/5d8de90a-d630-488a-ba1b-144443e19366/1.jpg",
			},
			{
				name: "Robert Clark",
				image:
					"https://upload.wikimedia.org/wikipedia/commons/7/77/Robert_T_Clark.jpg",
			},
		],
		abstract:
			"This study investigates how different parenting styles can impact the academic performance and overall development of children.",
		link: "https://ieeexplore.ieee.org/document/7342713",
		date: "2023-07-19",
	},
];

// Insert the data into the database
// const result = await threeCollege.insertMany(data);

// Server Running Home Route
app.get("/", async (req, res) => {
	res.send("<h1> Assalamualaikum </h2>");

	// const result = await researchedPaper.insertMany(data);
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

// gallery image
app.get("/research-papers", async (req, res) => {
	const result = await researchedPaper.find().toArray();
	res.send(result);
});

// Server Run
app.listen(port, () => {
	console.log(`Server Running Succuss. port: ${port}`);
});
