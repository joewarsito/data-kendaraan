const Kend = require("../models/kendaraan")
const User = require("../models/user")

const create = async (req) => {
    let { merk, tipe, roda, tahun, bbm, harga, author } = req.body

    var insert_data = {
        merk,
        tipe,
        roda,
        tahun,
        bbm,
        harga,
        author
    }

    let data = new Kend(insert_data)

    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }
}

const getAll = async () => {
    try {
    let query = await Kend.find({ })
    .populate([
    {
        path: 'author',
        model: User
    }
    ]).exec()
    let data = query.map((v, i) => {
                    return {
                        merk: v.merk,
                        tipe: v.tipe,
                        roda: v.roda,
                        tahun: v.tahun,
                        bbm: v.bbm,
                        harga: v.harga,
                        author: v.author
                    }
                })
    console.log(data)
    return data
} catch(err) {
    console.log(err)
    throw err
    }   
}


const getDetail = async (id) => {
    try {
        let query = await Kend.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { merk, tipe, roda, tahun, bbm, harga, author, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        merk,
        tipe,
        roda,
        tahun,
        bbm,
        harga,
        author
    }

    try {
        let query = await Kend.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await Kend.findOneAndDelete({
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