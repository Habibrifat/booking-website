import User from "../models/User.js";

export const updateUser = async (req,res,next) => {
    try{
        const updateModel = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

        res.status(200).json(updateModel);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
export const deleteUser = async (req,res,next) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }
}
export const getUser = async (req,res,next) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
        // res.end("Update Sucessfully");
    }catch (error){
        res.status(500).json(error);
    }

}
export const getUsers = async (req,res,next) => {
    try{
        const users = await User.find();

        res.status(200).json(users);
        // res.end("Update Sucessfully");
    }catch (error){
        // res.status(500).json(error);
        next(error);
    }
}
