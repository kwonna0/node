const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000; // -- 처음에 할땐 3000이라고 하고 한 후
//localhost:3000 으로 하시는 것을 추천
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/static', express.static('public')); 

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

app.post("/", (req, res) => {
  console.log('---');
  res.json({ message: "Welcome to our application." });
});
app.get("/", (req, res) => {
    console.log('---');
    res.json({ message: "Welcome to our application." });
  });
app.post("/test", (req, res) => {
    console.log('post check');
    res.json({ message: "win 상윤" });
  });

app.get("/image/get", async (req, res) => {
	const url = "https://www.ringleplus.com";
	res.json(url);
});

