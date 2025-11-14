export default function ContactItem({ contact, onDelete }) {
  const { id, name, email, phone } = contact;

  return (
    <li>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Telepon: {phone}</p>

      <button onClick={() => onDelete(id)}>Hapus</button>
    </li>
  );
}
