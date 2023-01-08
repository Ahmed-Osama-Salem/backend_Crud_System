const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TableModel = require("./models/ConstructTable");
const TablePayModel = require("./models/PayTabledb");
const TablePrimModel = require("./models/PrimTabledb");
const TableStoreModel = require("./models/StoreTabledb");
const TableNewProjectModel = require("./models/NewConstuctTable");
const UserModel = require("./models/Users");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

//connect to mongodb by mongodb atlas [cluster]

mongoose.connect(
  "mongodb+srv://elfit12345:elfit12345@crud.vgwhvmn.mongodb.net/constructionTable?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);


//users Register 

app.post("/register",async(req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const job = req.body.job;

 const usersTable = new UserModel({
  name: name,
  phone:phone,
  password:password,
  email:email,
  job: job,
 });
 try {
  await usersTable.save();
  res.status(200).json({data: usersTable})
  // res.status(200).send(`Welcome ${name} you just joined to EL-FiT Group`);
} catch (err) {
  if(password.length <= 5){
    res.status(400).json({message: "your password is too short"})
  }
  res.status(404).send("noooo data posted");
}
})

//post all frontend values to database

app.post("/insert", async (req, res) => {
  const allText = req.body.allText;
  const test = req.body.text;
  const textMosad = req.body.textMosad;

  const time = req.body.time;

  const constructionTable = new TableModel({
    time: time,
    allText: allText,
    text: test,
    textMosad: textMosad,
  });

  try {
    await constructionTable.save();
    res.send("succsess insert");
  } catch (err) {
    console.log(err);
  }
});

//render and read data that posted in database

app.get("/read", (req, res) => {
  TableModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//delete cell from database

app.delete("/delete/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;

  await TableModel.findByIdAndRemove(mongoId).exec();
  res.send("deleted");
});

// update constSheet supply date update

app.put("/update/:mongoId", async (req, res) => {
  const newConstrDate = req.body.newConstrDate;
  const mongoId = req.params.mongoId;
  const dateNowUpdate = req.body.dateNowUpdate;
  const rkmElw7daUpdate = req.body.rkmElw7daUpdate;
  const elbndUpdate = req.body.elbndUpdate;
  const techNumberUpdate = req.body.techNumberUpdate;
  const mosadNumberUpdate = req.body.mosadNumberUpdate;
  const noteAddUpdate = req.body.noteAddUpdate;
  const kmiatMonUpdate = req.body.kmiatMonUpdate;
  const tnfizStateUpdate = req.body.tnfizStateUpdate;
  const angazUpdate = req.body.angazUpdate;
  const notesUpdate = req.body.notesUpdate;
  const fromUpdate = req.body.fromUpdate;
  const toUpdate = req.body.toUpdate;
  const topicsUpdate = req.body.topicsUpdate;
  const contractTypeUpdate = req.body.contractTypeUpdate;
  try {
    await TableModel.findByIdAndUpdate(mongoId, {
      "allText.twqi3": newConstrDate,
      "allText.dateNow": dateNowUpdate,
      "allText.rkmElw7da": rkmElw7daUpdate,
      "allText.elbnd": elbndUpdate,
      "allText.techNumber": techNumberUpdate,
      "allText.mosadNumber": mosadNumberUpdate,
      "allText.noteAdd": noteAddUpdate,
      "allText.kmiatMon": kmiatMonUpdate,
      "allText.tnfizState": tnfizStateUpdate,
      "allText.angaz": angazUpdate,
      "allText.notes": notesUpdate,
      "allText.from": fromUpdate,
      "allText.to":toUpdate,
      "allText.topics": topicsUpdate,
      "allText.contractType":contractTypeUpdate
    });
    res.status(200).send("update data successfully");
  } catch (err) {
    res.status(404).send("faild update");
  }
});

//update cell from database and react

// the PaySheet connect to mongodb

//post all frontend values to database

app.post("/insertPay", async (req, res) => {
  const allPayText = req.body.allPayText;
  // const dateNow = req.body.dateNow;
  const timeNow = req.body.timeNow;

  const constructionTable = new TablePayModel({
    // dateNow: dateNow,
    timeNow: timeNow,
    allPayText: allPayText,
  });

  try {
    await constructionTable.save();
    res.send("succsess insert");
  } catch (err) {
    console.log(err);
  }
});

//render and read data that posted in database

app.get("/readPay", (req, res) => {
  TablePayModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//delete cell from database

app.delete("/deletePay/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;

  await TablePayModel.findByIdAndRemove(mongoId).exec();
  res.send("deleted");
});

// update paySheet supply date

app.put("/updatePay/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;
  const dateNowUP = req.body.dateNowUP;
  const elwahdaNameUP = req.body.elwahdaNameUP;
  const jobsUP = req.body.jobsUP;
  const contractorNameUP = req.body.contractorNameUP;
  const newPayReciver = req.body.newPayReciver;
  const bandUP = req.body.bandUP;
  const unitUP = req.body.unitUP;
  const kmiaUP = req.body.kmiaUP;
  const newPayDate = req.body.newPayDate;
  const newPayNote = req.body.newPayNote;
  const newPaySign = req.body.newPaySign;
  try {
    await TablePayModel.findByIdAndUpdate(mongoId, {
      "allPayText.dateNow": dateNowUP,
      "allPayText.elwahdaName": elwahdaNameUP,
      "allPayText.jobs": jobsUP,
      "allPayText.contractorName": contractorNameUP,
      "allPayText.reciverName": newPayReciver,
      "allPayText.band": bandUP,
      "allPayText.unit": unitUP,
      "allPayText.kmia": kmiaUP,
      "allPayText.payDate": newPayDate,
      "allPayText.note": newPayNote,
      "allPayText.signiture": newPaySign,
    });
    res.send("done");
  } catch (err) {
    console.log(err);
    res.send("faild update");
  }
});

// the PrimisionSheet connect to mongodb

//post all frontend values to database

app.post("/insertPrim", async (req, res) => {
  const formData = req.body.formData;
  const dateNow = req.body.dateNow;
  const timeNow = req.body.timeNow;
  const supplyInputs = req.body.supplyInputs;

  const constructionTable = new TablePrimModel({
    dateNow: dateNow,
    timeNow: timeNow,
    formData: formData,
    supplyInputs: supplyInputs,
  });

  try {
    await constructionTable.save();
    res.send("succsess insert to TablePrimModel");
  } catch (err) {
    console.log(err);
  }
});

//render and read data that posted in database

app.get("/readPrim", (req, res) => {
  TablePrimModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//delete cell from database

app.delete("/deletePrim/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;

  await TablePrimModel.findByIdAndRemove(mongoId).exec();
  res.send("deleted");
});

// update primSheet supply date

app.put("/updatePrim/:mongoId", async (req, res) => {
  const newData = req.body.newData;
  const mongoId = req.params.mongoId;
  const newPaid = req.body.newPaid;
  const newSubPaid = req.body.newSubPaid;
  const newNote = req.body.newNote;
  const newSign = req.body.newSign;
  const newTotal = req.body.newTotal;

  try {
    await TablePrimModel.findByIdAndUpdate(mongoId, {
      "formData.supplyDate": newData,
      "formData.paid": newPaid,
      "formData.subPaid": newSubPaid,
      "formData.notes": newNote,
      "formData.sign": newSign,
      "formData.total": newTotal,
    });
    res.send("done");
  } catch (err) {
    console.log(err);
    res.send("faild update");
  }
});

// the storeSheet connect to mongodb

//post all frontend values to database

app.post("/insertStore", async (req, res) => {
  const formText = req.body.formText;
  const dateNow = req.body.dateNow;
  const timeNow = req.body.timeNow;
  const storeInputs = req.body.storeInputs;

  const constructionTable = new TableStoreModel({
    dateNow: dateNow,
    timeNow: timeNow,
    formText: formText,
    storeInputs: storeInputs,
  });

  try {
    await constructionTable.save();
    res.send("succsess insert to TableStoreModel");
  } catch (err) {
    console.log(err);
  }
});

//render and read data that posted in database

app.get("/readStore", (req, res) => {
  TableStoreModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//delete cell from database

app.delete("/deleteStore/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;

  await TableStoreModel.findByIdAndRemove(mongoId).exec();
  res.send("deleted");
});

// update StoreSheet supply date

app.put("/updateStore/:mongoId", async (req, res) => {
  const newDate = req.body.newDate;
  const mongoId = req.params.mongoId;
  const newNote = req.body.newNote;
  const newStoreSign = req.body.newStoreSign;
  try {
    await TableStoreModel.findByIdAndUpdate(mongoId, {
      "formText.storeDate": newDate,
      "formText.notes": newNote,
      "formText.sign": newStoreSign,
    });
    res.send("done");
  } catch (err) {
    console.log(err);
    res.send("faild update");
  }
});

//new project table

//post all frontend values to database

app.post("/insertNewPro", async (req, res) => {
  const allText = req.body.allText;
  const test = req.body.text;
  const textMosad = req.body.textMosad;
  const id = req.body.id;
  const time = req.body.time;

  const constructionTable = new TableNewProjectModel({
    id: id,
    time: time,
    allText: allText,
    text: test,
    textMosad: textMosad,
  });

  try {
    await constructionTable.save();
    res.send("succsess insert");
  } catch (err) {
    console.log(err);
  }
});

//render and read data that posted in database

app.get("/readNewPro", (req, res) => {
  TableNewProjectModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

//delete cell from database

app.delete("/deleteNewPro/:mongoId", async (req, res) => {
  const mongoId = req.params.mongoId;

  await TableNewProjectModel.findByIdAndRemove(mongoId).exec();
  res.send("deleted");
});

// update constSheet supply date

app.put("/updateNewPro/:mongoId", async (req, res) => {
  const newConstrDate = req.body.newConstrDate;
  const mongoId = req.params.mongoId;

  try {
    await TableNewProjectModel.findByIdAndUpdate(mongoId, {
      "allText.twqi3": newConstrDate,
    });
    res.send("done");
  } catch (err) {
    console.log(err);
    res.send("faild update");
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log("port is running");
});
