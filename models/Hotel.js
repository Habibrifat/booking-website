import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    distance:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    photos:{
        type: [String],
    },
    des:{
        type: String,
        require: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    room:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        require: true
    },
    featured:{
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Hotel",HotelSchema);