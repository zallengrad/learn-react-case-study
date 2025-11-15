import { useParams, Link } from "react-router-dom";

export default function ContactDetail({ contacts }) {
  const { id } = useParams();

  const contact = contacts.find((item) => item.id === Number(id));

  if (!contact) {
    return (
      <div>
        <h2>Kontak TIdak ditemukan</h2>
        <Link to="/">kembali ke daftar kontak</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detail Kontak</h2>
      <p>
        <strong>Nama : </strong> {contact.name}{" "}
      </p>
      <p>
        <strong>Email : </strong> {contact.email}
      </p>
      <p>
        <strong>Telephone : </strong>
        {contact.phone}
      </p>

      <Link to="/">kembali ke daftar kontak</Link>
    </div>
  );
}
