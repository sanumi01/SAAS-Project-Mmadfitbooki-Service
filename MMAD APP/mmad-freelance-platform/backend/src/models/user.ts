import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['freelancer', 'client'],
        required: true
    },
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }],
    enquiries: [{
        type: Schema.Types.ObjectId,
        ref: 'Enquiry'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const User = model('User', userSchema);