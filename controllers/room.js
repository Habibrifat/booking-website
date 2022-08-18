import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const saveRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push: { room: saveRoom._id},})
        }catch (e) {
            next(e);
        }
        res.status(200).json(saveRoom);
    }catch (e) {
        next(e);
    }

};

export const updateRoom = async (req,res,next) => {
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

        res.status(200).json(updateRoom);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
//problem
export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                },
            }
        );
        res.status(200).json("Room status has been updated.");
    } catch (err) {
        next(err);
    }
};
export const deleteRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$pull: { room: req.params.id},})
        }catch (e) {
            next(e);
        }
        res.status(200).json("Room deleted");
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
export const getRoom = async (req,res,next) => {
    try{
        const room = await Room.findById(req.params.id);

        res.status(200).json(room);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }

}
export const getRooms = async (req,res,next) => {
    try{
        const rooms = await Room.find();

        res.status(200).json(rooms);
        // res.end("Update Sucessfully");
    }catch (error){
        // res.status(500).json(error);
        next(error);
    }
}
