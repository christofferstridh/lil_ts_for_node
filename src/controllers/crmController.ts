import {model, Document, Model, Schema, Error} from 'mongoose';
import { contactSchema } from '../models/crmModel.js';
import {Request, Response} from 'express';

const contact = model('Contact', contactSchema);

export const addNewContact = async (req:Request): Promise<Document> => {
    console.log("sejvar"+req);
    let newContact = new contact(req.body);

    return newContact.save();
};

export const getContacts = (req:Request, res:Response):void => {
    console.log("sdjhfksh");
    contact.find({}).then((items:any)=>res.json(items)).catch((err:Error)=>console.log(err));
};

export const getContactWithID = (req:Request, res:Response) => {
    contact.findById(req.params.contactId).then((contact:any) => {         
        res.json(contact);
    }).catch((err:Error) => {
        res.send(err);
    });
}

export const updateContact = (req:Request, res:Response) => {
    contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }).then( (contact:any) => {
        res.json(contact);
    }).catch((err:Error) => {
        res.send(err);
    });
}

export const deleteContact = (req:Request, res:Response) => {
    contact.deleteOne({ _id: req.params.contactId }).then(() => {
        res.json({ message: 'Successfully deleted contact'});
    }).catch((err:Error) => {
        res.send(err);
    });
}