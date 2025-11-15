import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ContactList from "./components/ContactList.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ContactDetail from "./components/ContactDetail.jsx";

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

      <nav>
        <ul>
          <li>
            <Link to="/">Daftar Kontak</Link>
          </li>
          <li>
            <Link to="/add">Tambah Kontak</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} onDelete={handleDeleteContact} />} />

        <Route path="/add" element={<ContactForm tambahKontak={handleAddContact} />} />

        <Route path="/contacts/:id" element={<ContactDetail contacts={contacts} />} />
      </Routes>

      <Footer />
    </div>
  );
}
