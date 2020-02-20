const {Router} = require("express");
const router = Router();
const path = require('path');
const fs = require('fs');

const statsPath = path.join(__dirname, "../", "db", "users_statistic.json")

// get /api/stats    // GET ALL STATS
router.get("/", async (req, res) => {
  try {
    fs.readFile(statsPath, 'utf-8', (err, stats) => {
      if(err) {
        throw err
      }
      res.status(200).json({success:  true, stats : JSON.parse(stats)})
    })
  } catch (e) {
    res.status(500).json({success : false, message: "Something worn wrong, try again"});
  }
});

// get /api/stats/:id   // GET STATS BY ID
router.get('/:id', async (req, res) => {
  const userId = Number(req.params.id)
  try {
    fs.readFile(statsPath, 'utf-8', (err, users) => {
      if(err) {
        throw err
      }
      const allStats = JSON.parse(users)
      const stats = allStats.filter(el => el.user_id === userId)
      if (!!stats.length) {
        console.log('/api/users get status OK')
        res.status(200).json({success:  true, stats})
      } else {
        res.status(404).json({success : false, message: "Users not found"})
      }
    })
  } catch (e) {
    res.status(500).json({success : false, message: "Something worn wrong, try again"});
  }
});
module.exports = router;
