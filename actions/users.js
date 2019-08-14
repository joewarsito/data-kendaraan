const User = require("../models/user")
const {toLower} = require ('lodash')
var validator = require("email-validator");

const create = async (req) => {
    let { nama, email, hp } = req.body
    email = toLower(email)

    if(validator.validate(email) === false) {
        return "Wrong type of `email`"
    }

    var insert_data = {
        nama,
        email,
        hp
    }

    let data = new User(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await User.find({}).exec()
        let data = query.map((v, i) => {
            return {
                nama: v.nama,
                email: v.email,
                hp: v.hp
            }
        })

        return data
    } catch(err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { nama, email, hp, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        nama,
        email,
        hp
    }

    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await User.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}