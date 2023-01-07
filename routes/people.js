const express = require("express");

const router = express.Router();

const {
  getDelete,
  getPeople,
  getPostMan,
  getSinglePerson,
  getUpdate,
} = require("../controllers/people");

//the default get method
router.get("/", getPeople);
router.get("/:id", getSinglePerson);
//post using route
router.post("/postman", getPostMan);

//for updating data you use put

//post method using javascript frontend to add data

//put method to update
router.put("/:id", getUpdate);

router.delete("/:id", getDelete);

module.exports = router;
