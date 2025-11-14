import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactList from "./components/ContactList.jsx";
import ContactForm from "./components/ContactForm.jsx";

const intitialContacts = [
  {
    id: 1,
    name: "Zale",
    email: "zale@mail.com",
    phone: "08123456789",
  },
  {
    id: 2,
    name: "obama",
    email: "risad@mail.com",
    phone: "08987654321",
  },
  {
    id: 3,
    name: "jokowi",
    email: "jokowi@mail.com",
    phone: "08765432109",
  },
  {
    id: 4,
    name: "Andi",
    email: "andi@example.com",
    phone: "0812-7777-8888",
  },
];

export default function App() {
  const [contacts, setContacts] = useState(intitialContacts);

  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <Header total={contacts.length} />
      <ContactForm tambahKontak={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />

      <Footer />
    </div>
  );
}
