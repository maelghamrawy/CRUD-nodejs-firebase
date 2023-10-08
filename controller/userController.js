const db = require("../config/firebaseConfig");

exports.createUser = async (req, res) => {
  try {
    console.log("the body is", req.body);
    const id = req.body.email;
    const userJson = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };
    const writeResult = await db.collection("user").add(userJson);
    // console.log('Write result:', writeResult)
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const userRef = db.collection("user");
    const response = await userRef.get();
    const responseArr = [];
    response.forEach((doc) => {
      const userData = doc.data()
      responseArr.push({
        id: doc.id,
        ...userData
      });
    });
    res.send(responseArr);
  } catch (error) {
    res.send(error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userRef = db.collection("user").doc(req.params.id);
    const response = await userRef.get();
    res.send({
      id: doc.id,
      ...response.data()
    });
  } catch (error) {
    res.send(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, firstName, lastName } = req.body;

    const userRef = db.collection("user").doc(userId);

    const user = await userRef.get();

    if (!user.exists) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!email || !firstName || !lastName) {
      return res.status(400).json({
        error: "Email, firstname, and lastname are required fields",
      });
    }

    await userRef.update({
      email,
      firstName,
      lastName,
    });

    res.status(200).json({
      id: userId,
      email,
      firstName,
      lastName,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
    
        const userRef = db.collection("user").doc(userId);
        const user = await userRef.get();
    
        // Check if user exists
        if (!user.exists) {
          return res.status(404).json({
            error: "User not found",
          });
        }
    
        // Delete the user
        await userRef.delete();
    
        res.status(200).json({
          message: "User deleted successfully",
        });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
};
