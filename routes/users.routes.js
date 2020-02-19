const {Router} = require("express");
const router = Router();
const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, "../", "db", "users.json")

// get /api/users    // GET ALL USERS
// router.get("/users", async (req, res) => {
//   console.log('get users')
//   try {
//     fs.readFile(usersPath, 'utf-8', (err, users) => {
//       if(err) {
//         throw err
//       }
//       console.log('/api/users get status OK')
//       res.status(200).json({success:  true, users : JSON.parse(users)})
//     })
//   } catch (e) {
//     console.log('/api/users get status 500')
//     res.status(500).json({success : false, message: "Something worn wrong, try again"});
//   }
// });

// get /api/users:id    // GET ONE USERS BY ID
router.get("/users/:id", async (req, res) => {
  console.log('get users by id')
  const userId = Number(req.params.id)
  try {
    fs.readFile(usersPath, 'utf-8', (err, users) => {
      if(err) {
        throw err
      }
      const allUsers = JSON.parse(users)
      const user = allUsers.filter(el => el.id === userId)
      if (!!user.length) {
        console.log('/api/users get status OK')
        res.status(200).json({success:  true, user : user[0]})
      } else {
        console.log('/api/users get status 404')
        res.status(404).json({success : false, message: "Users not found"})
      }
    })
  } catch (e) {
    console.log('/api/users get status 500')
    res.status(500).json({success : false, message: "Something worn wrong, try again"});
  }

});


// get users paginations
router.get("/users?:query", async (req, res) => {
  console.log('get users paginations')
  const page = Number( req.query.page)
  const count = Number( req.query.count)
  try {
    fs.readFile(usersPath, 'utf-8', (err, items) => {
      if(err) {
        throw err
      }
      const allUsers = JSON.parse(items);
      const  total_users = allUsers.length;
      const total_page = Math.ceil(allUsers.length / count);
      const users = allUsers.slice(((page - 1) * count), (page * count))
      if (page <= total_page) {
        console.log('/api/users get status OK')
        res.status(200).json({success:  true, page, total_page, total_users, users})
      } else {
        console.log('/api/users get status page not found')
        res.status(404).json({success : false, message: "Page not found"});
      }
    })

  } catch (e) {
    console.log('/api/users get status 500')
    res.status(500).json({success : false, message: "Something worn wrong, try again"});
  }
})

module.exports = router;
