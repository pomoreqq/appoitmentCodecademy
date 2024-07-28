import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false)

  const handleNameChange =(e) => {
    
    const newName = e.target.value;
    setName(newName);
    const isDuplicate = checkDuplicate(contacts, newName);
    setIsDuplicate(isDuplicate);
  }

  const handlePhoneChange =(e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange =(e) => {
    setEmail(e.target.value)
  }

  const checkDuplicate =(contacts,name) => {
   const isTrue = contacts.some((contact) => {
      return contact.name === name
    })
    return isTrue
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   if (isDuplicate === true) {
    alert('Error')
   } 
   addContact(name,phone,email)

   setName('');
   setPhone('');
   setEmail('');
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        < ContactForm 
           name={name}
           phone={phone}
           email={email}
           handleNameChange={handleNameChange}
           handlePhoneChange={handlePhoneChange}
           handleEmailChange={handleEmailChange}
           handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        < TileList items={contacts} />
      </section>
    </div>
  );
};
