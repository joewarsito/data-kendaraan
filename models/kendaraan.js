/**
 * Book Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let kendSchema = new Schema({
    merk: String,
    tipe: String,
    roda: String,
    tahun: String,
    bbm: String,
    author: String,
    harga: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Kend = mongoose.model("Kendaraan", kendSchema)

module.exports = Kend