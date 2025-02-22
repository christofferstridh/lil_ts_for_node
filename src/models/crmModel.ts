import {Schema} from 'mongoose';

export interface Contact {
    firstName: string,
    lastName: string,
    email?: string,
    company?: string,
    phone?: number,
    created_date?: Date
}

export const contactSchema = new Schema<Contact>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});
