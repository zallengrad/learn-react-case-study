import ContactItem from "./ContactItem.jsx";

export default function ContactList({ contacts, onDelete }) {
  return (
    <section>
      <h2>Daftar Kontak</h2>

      {contacts.length === 0 ? (
        <p>Belum ada kontak.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  );
}
