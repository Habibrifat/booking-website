import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req,res,next) => {

    const newHotel = new Hotel(req.body);
    try{
        const savedModel = await newHotel.save();
        res.status(200).json(savedModel);
    }catch (error){
        next(error);
    }
}
export const updateHotel = async (req,res,next) => {
    try{
        const updateModel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

        res.status(200).json(updateModel);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
export const deleteHotel = async (req,res,next) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted");
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
export const getHotel = async (req,res,next) => {
    try{
        const hotel = await Hotel.findById(req.params.id);

        res.status(200).json(hotel);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }

}
export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 },}).limit(req.query.limit);
        res.status(200).json(hotels);
    } catch (err) {
        next(err);
    }
};

//Not Clear
export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(',')
    try{
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }));
        res.status(200).json(list);
    }catch (error){
        // res.status(500).json(error);
        next(error);
    }
}

export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });

        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
    } catch (err) {
        next(err);
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.room.map((room) => {
                return Room.findById(room);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

