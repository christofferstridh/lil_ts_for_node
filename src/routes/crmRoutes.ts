import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} from '../controllers/crmController.js';
import express, { Request, Response, Application} from 'express';
const routes = (app:express.Application) => {
    app.route('/contact')
    .get((req:Request, res:Response, next: any) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    // POST endpoint
    .post((req:Request, res:Response)=>{
    /*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new user.',
        schema: {
            $firstName: 'dffs',
            $lastName: 'fghfgh',
            $email: '',
            $company: '',
            $phone: 46454
        }
    } */
        console.log(req+"kom in");
        addNewContact(req).then(doc=>res.json(doc));
    });

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithID)
    
    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
}

export default routes;
