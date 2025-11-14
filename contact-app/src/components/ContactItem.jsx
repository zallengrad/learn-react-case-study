export default function ContactItem({ contact }) {
  const { name, email, phone } = contact;

  return (
    <li>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Telepon: {phone}</p>
    </li>
  );
}
