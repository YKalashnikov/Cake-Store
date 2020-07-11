const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    cakes: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

/* 
productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        title: 5,
        description: 3,
    }
})
productSchema.statics = {
    c: function(q, callback) {
        return this.find({
            $or: [
                { "title": new RegExp(`^${q}`, "gi") },
                { "description": new RegExp(`^${q}`, "gi") },
            ]
        }, callback);
    }
} */

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }