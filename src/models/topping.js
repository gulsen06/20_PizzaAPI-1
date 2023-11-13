/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//! Topping Model

"use strict"

const { mongoose }=require('../configs/dbConneciton')


const ToppingSchema=new mongoose.Schema({

    name:{
        type:String,
        trim: true,
        required: true,
        unique: true
    },    

},
{
    collection: 'toppings',
    timestamps: true
})

module.exports=mongoose.model('Topping',ToppingSchema)