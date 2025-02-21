import { 
    addNewContact, 
    getContacts, 
    getContactWithID, 
    updateContact,
    deleteContact 
} from '../controllers/crmController.js';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
    
    // POST endpoint
    .post((req,res)=>{
        /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user.',
            schema: {
    $firstName: 'dffs',
    $lastName: 'fghfgh',
    $email: '',
    $company: '',
    $phone: 46454,
    $created_date: ''
}
    } */
        console.log(req+"kom in");
        return res.json(addNewContact(req));
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
