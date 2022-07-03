const express = require("express");
require("./db/mongoose.js");

const userRouter = require("./routers/user.js");
const taskRouter = require("./routers/task.js");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on the port ${port}`);
});

const Task = require("./models/task.js");
const User = require("./models/user.js");

// const main = async function () {
// const task = await Task.findById("62c002428e2aaf3e6b3e7baa");
// await task.populate("owner");
// console.log(task.owner);

//   const user = await User.findById("62bfffe2b59d4c4be47df7c0");
//   await user.populate("tasks");
// };

// main();

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "chhetribishal";
//   const hashPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashPassword);

//   const comparePW = await bcrypt.compare("Chhetribishal", hashPassword);
//   console.log(comparePW);
// };

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ id: "445vsv" }, "sample", { expiresIn: "24h" });
//   console.log(token);

//   const data = jwt.verify(token, "sample");
//   console.log(data);
// };

// myFunction();

// app.use((req, res, next) => {
//   res.status(503).send("All are disabled");
// });

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document."));
//     }
//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
