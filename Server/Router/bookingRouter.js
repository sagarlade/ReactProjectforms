const express = require("express");

const router1 = new express.Router();

const conn = require("../db/conn");

//Creating API
router1.post("/booking", (req, res) => {
  const { name, location, shot, time} = req.body;
  if (!name || !location || !shot || !time) {
    res.status(422).json("plz fill the all data");
  }
  try {
    conn.query("SELECT * FROM booking WHERE name = ?", name, (err, result) => {
      if (result.length) {
        res.status(422).json("This Data is Already Exist");
      } else {
        conn.query(
          "INSERT INTO booking SET ?",
          { name,location, shot, time},
          (err, result) => {
            if (err) {
              console.log("err" + err);
            } else {
              res.status(201).json(req.body);
            }
          }
        );
      }
    });
  } catch (error) {
    res.status(406).json(error);
  }
});


// get userdata

router1.get("/getbooking", (req, res) => {
  conn.query("SELECT * FROM booking", (err, result) => {
    if (err) {
      res.status(422).json("nodata available");
    } else {
      res.status(201).json(result);
    }
  });
});

// user delete api

router1.delete("/deletebooking/:id", (req, res) => {
  const { id } = req.params;

  conn.query("DELETE FROM booking WHERE id = ? ", id, (err, result) => {
    if (err) {
      res.status(422).json("error");
    } else {
      res.status(201).json(result);
    }
  });
});


// get single user

router1.get("/indbooking/:id", (req, res) => {
  const { id } = req.params;

  conn.query("SELECT * FROM booking WHERE id = ? ", id, (err, result) => {
    if (err) {
      res.status(422).json("error");
    } else {
      res.status(201).json(result);
    }
  });
});

// update booking api

router1.patch("/updatebooking/:id", (req, res) => {
  const { id } = req.params;

  const data = req.body;

  conn.query("UPDATE booking SET ? WHERE id = ? ", [data, id], (err, result) => {
    if (err) {
      res.status(422).json({ message: "error" });
    } else {
      res.status(201).json(result);
    }
  });
});

module.exports = router1;
