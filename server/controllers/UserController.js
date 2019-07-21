const  User  = require('../Models/User')
const { sign, verify } = require('../helpers/jwt')

class UserController {
    static create(req, res) {
        const { email, password } = req.body
        User.create({
            email,
            password
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    }

    static loginUser(req, res) {
        User.findOne({
          email : req.body.email
        })
        .then((found) => {
          if(!found) {
            res.status(401).json({message : 'email/password not found'})
          } else {
            let token = sign({
              _id : found._id,
              email: found.email,
            })
            res.status(200).json({ 
              token : token,
              email : found.email, 
            })
          }
        })
        .catch(err => {
            console.log(err)
          res.status(500).json(err)
        })
      }
    
      static verifyToken(req, res) {
        let verified = verify(req.body.token)
        res.status(200).json(verified)
      }
}

module.exports = UserController