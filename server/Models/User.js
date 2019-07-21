const { hash } = require('../helpers/bcrypt')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'please input your email'],
        validate: [{
            validator: function(value) {
                return User.findOne({
                    email: value,
                    _id : {
                        $ne: this._id
                    }
                })
                .then((data) => {
                    if(data) return false
                })
            }, msg: 'email already registered'
        },{
            validator: function(value) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return re.test(String(value).toLocaleLowerCase())
            }, msg: 'invalid email format'
        }]
    },
    password: {
        type: String,
        required: [true, 'please input your password'],
        minlength : [7 , 'password character min is 7'],
        maxlength : [20 , 'password character max is 20']
    }
    
})

userSchema.pre('save', function(next) {
    this.password = hash(this.password)
    next()
  })

const User = mongoose.model('User', userSchema)

module.exports = User