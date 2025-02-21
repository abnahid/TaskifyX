const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MATRIMONY_IQ_USER}:${process.env.MATRIMONY_IQ_USER_PASS}@abnahid.cot7i.mongodb.net/?retryWrites=true&w=majority&appName=abnahid`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const tasksCollection = client
      .db("tasks")
      .collection("tasks");
    const userCollection = client.db("tasks").collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const isExist = await userCollection.findOne({ email: user?.email });
      if (isExist) {
        return res.status(409).send({ message: "User already exists." });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    // CARD
    app.get("/tasks/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await tasksCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/task/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await tasksCollection.findOne(query);
      res.send(result);
    });

    // Add a task
    app.post('/tasks', async (req, res) => {
      const { title, description, dueDate, category, email } = req.body;
      const newTask = {
        title,
        description,
        category,
        email,
        dueDate: dueDate ? new Date(dueDate) : null,
        timestamp: new Date(),
      };

      const result = await tasksCollection.insertOne(newTask);
      res.status(201).json(result);

    });

    // Update a task
    app.put('/tasks/:id', async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;


      const result = await tasksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task updated successfully' });

    });

    // Delete a task
    app.delete('/tasks/:id', async (req, res) => {
      const { id } = req.params;

      const result = await tasksCollection.deleteOne({
        _id: new MongoClient.ObjectId(id),
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }

      res.json({ message: 'Task deleted' });
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Run the database connection setup
run().catch(console.dir);

app.get("/", (req, res) => {
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Matrimony Nexus Server</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #ffffff; /* BgMainColor */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: #333;
          }
          .container {
            text-align: center;
            padding: 20px;
            border: 2px solid #c0272c; /* BgSecondary */
            border-radius: 10px;
            background-color: #F1494C; /* BgPrimary */
            color: #ffffff;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }
          p {
            font-size: 1.2rem;
            margin: 5px 0;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            color: #ffffff;
            background-color: #c0272c; /* BgSecondary */
            padding: 10px 20px;
            border-radius: 5px;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }
          a:hover {
            background-color: #ffffff;
            color: #c0272c;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Matrimony Nexus Server</h1>
          <p>Your trusted server for connecting hearts!</p>
          <p>Server is running smoothly.</p>
          <a href="/biodatas">View Biodatas</a>
        </div>
      </body>
      </html>
    `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Coffee Making Server Is Running on Port: ${port}`);
})