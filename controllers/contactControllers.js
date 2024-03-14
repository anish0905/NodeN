// @desc Get all contacts
// @route GET/api/contacts
//@access public

const getContacts = (req,resp)=>{
    resp.status(200).json({message:"Get all contact"});
  }

  // @desc create contact
// @route GET/api/contacts
//@access public

                  const createContact =(req,resp)=>{
                    console.log("The request body is",req.body);
                    const{name,email,phone}=req.body;
                    if(!name,!email,!phone)
                    {
                        resp.status(400);
                        throw new Error ("All fields are mandatory")
                    }
                    resp.status(201).json({message:"create contact"});
                  }


    // @desc Get contact
// @route GET/api/contacts/:id
//@access public

const getContact = (req,resp)=>{
resp.status(200).json({message:`Get contact for ${req.params.id}`});
}


   // @desc update contact
// @route GET/api/contacts/:id
//@access public
updateContact = (req,resp)=>{
    resp.status(200).json({message:`update contact ${req.params.id}`});
}

   // @desc delete contact
// @route GET/api/contacts/:id
//@access public

const deleteContact = (req,resp)=>{
    resp.status(200).json({message:`delete contact ${req.params.id}`})
}



  module.exports=  {
    getContacts,
    createContact,
    createContact,
    getContact,
    updateContact,
    deleteContact};