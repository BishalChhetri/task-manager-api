// CRUD create read Update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database", error);
    }
    const db = client.db(databaseName);

    // Create the data in databases

    // db.collection("users").insertOne(
    //   {
    //     name: "Sujan",
    //     age: 27,
    //   },
    //   async (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert User");
    //     }
    //     const final = await db
    //       .collection("users")
    //       .findOne({ _id: result.insertedId });
    //     console.log(final);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Bipin",
    //       age: 26,
    //     },
    //     {
    //       name: "Ujjal",
    //       age: 24,
    //     },
    //   ],
    //   async (error, result) => {
    //     if (error) {
    //      return console.log("Unable to insert User");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "To calculate the total sales.",
    //       completed: true,
    //     },
    //     {
    //       description: "Frontend Task",
    //       completed: false,
    //     },
    //     {
    //       description: "Fixing Bugs",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks");
    //     }
    //     console.log(result);
    //   }
    // );

    // Read the database

    // db.collection("users").findOne({ age: 22 }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .toArray((error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(count);
    //   });
    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("62b986accd24801ae096adb7") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );
    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, task) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(task);
    //   });

    //Updating data in databases

    //     db.collection("users")
    //       .updateOne(
    //         { _id: ObjectID("62b975b3f6727c882735ac23") },
    //         {
    //           $inc: {
    //             age: 1,
    //           },
    //         }
    //       )
    //       .then((result) => {
    //         console.log(result);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .deleteMany({
    //     age: 22,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "Fixing Bugs",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
