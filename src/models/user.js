/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
//! User Model

"use strict"

const { mongoose }=require('../configs/dbConneciton')

const passwordEncrypt  =require('../helpers/passwordEncrypt')

const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        trim: true,
        required: true,
        unique: true
    },
    password:{
        type:String,
        trim: true,
        required: true,
        set: (password)=> passwordEncrypt(password)
    },
    email:{
        type:String,
        trim: true,
        required: [true,'Email must be required'],
        unique: [true,'Email must be unique'],
        valdate: [(email)=>email.includes('@') && email.includes('.'),'Email not correct']
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},
{
    collection: 'users',
    timestamps: true
})

module.exports=mongoose.model('User',UserSchema)