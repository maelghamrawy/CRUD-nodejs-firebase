const express = require("express");
const userRoutes = require('./routes/userRoutes')
const app = express();

// const bodyParser = require("body-parser");

// const admin = require("firebase-admin");
// const serviceAccount = require("./key.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes)
// create users
// app.post("/create", async (req, res) => {
//   try {
//     console.log("the body is", req.body);
//     const id = req.body.email;
//     const userJson = {
//       email: req.body.email,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//     };
//     const writeResult = await db.collection("user").add(userJson);
//     // console.log('Write result:', writeResult)
//     res.status(201).send("User created successfully");
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // get all users
// app.get("/users/all", async (req, res) => {
//   try {
//     const userRef = db.collection("user");
//     const response = await userRef.get();
//     const responseArr = [];
//     response.forEach((doc) => {
//       responseArr.push(doc.data());
//     });
//     res.send(responseArr);
//   } catch (error) {
//     res.send(error);
//   }
// });

// // get one user
// app.get("/user/:id", async (req, res) => {
//   try {
//     const userRef = db.collection("user").doc(req.params.id);
//     const response = await userRef.get();
//     res.send(response.data());
//   } catch (error) {
//     res.send(error);
//   }
// });

// // update the user data
// app.put("/updateUser/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const { email, firstName, lastName } = req.body;

//     const userRef = db.collection("user").doc(userId);

//     const user = await userRef.get();

//     if (!user.exists) {
//       return res.status(404).json({
//         error: "User not found",
//       });
//     }

//     if (!email || !firstName || !lastName) {
//       return res.status(400).json({
//         error: "Email, firstname, and lastname are required fields",
//       });
//     }

//     await userRef.update({
//       email,
//       firstName,
//       lastName,
//     });

//     res.status(200).json({
//       id: userId,
//       email,
//       firstName,
//       lastName,
//     });
//   } catch (error) {
//     res.send(error);
//   }
// });

// // delete user
// app.delete("/deleteUser/:id", async (req, res) => {
//   try {
//     const userId = req.params.id;

//     const userRef = db.collection("user").doc(userId);
//     const user = await userRef.get();

//     // Check if user exists
//     if (!user.exists) {
//       return res.status(404).json({
//         error: "User not found",
//       });
//     }

//     // Delete the user
//     await userRef.delete();

//     res.status(200).json({
//       message: "User deleted successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// const db = admin.firestore();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`servire is runnig on port ${PORT}`);
});
