import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

dotenv.config({
	path: ".env",
});
connectDb();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ["https://my-project-o7bve62yb-mohammed-abubakar-s-projects.vercel.app", 
			"https://my-project-sand-beta.vercel.app", "http://localhost:3000"],
		credentials: true,
	})
);

app.use("/api", shortUrl);
// app.get("/", (req, res)=>{
//     res.send("hello world");
// });

app.listen(port, () => {
	console.log(`Server started on Port : ${port} `);
});
