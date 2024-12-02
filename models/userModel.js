import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName : {
        type:String,
        required:true,
    },
    email : {
        type : String,
        required : true
    },
    companyName : {
        type:String,
        required:true,
    },
    isInvestor : {
        type : Boolean,
        default : false
    },
    isHomeBuyer : {
        type : Boolean,
        default : false
    },
    isAgent : {
        type : Boolean,
        default : false
    },
    isInvestmentBuyer : {
        type : Boolean,
        default : false
    },
    phone : {
        type:String,
        required:true,
    },
    password : {
        type : String,
        required : true
    }
})