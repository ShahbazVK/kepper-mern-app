const express = require('express');
const router = express.Router();

const { addMemo, getMemo, deleteMemo } = require("../controllers/memo")

router.post("/addmemo", addMemo);
router.get("/getmemo", getMemo);
router.delete("/deletememo/:_id", deleteMemo);

module.exports = router;