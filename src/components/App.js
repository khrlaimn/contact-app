import React, {useState} from 'react';
// react hook, useState
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // provide "List"
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Aiman",
  //     email: "aiman@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Yusup",
  //     email: "yusup@gmail.com",
  //   },

  // ];
  const[contacts, setContacts] = useState([]);
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      {/* pass contact in contactList using props */}
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
 