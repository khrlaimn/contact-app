import React, { useEffect, useState } from "react";
// react hook, useState, useEffect - value changes help to give component
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const contacts = [
  // provide "List"
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
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contact";
  const addContactHandler = (contact) => {
    // define the function
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    // retriving contacts
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, [contacts]);

  useEffect(() => {
    // storing contacts
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      {/* pass a a function as props declare the handler  */}
      <ContactList contacts={contacts} />{" "}
      {/* pass contact in contactList using props */}
    </div>
  );
}

export default App;
