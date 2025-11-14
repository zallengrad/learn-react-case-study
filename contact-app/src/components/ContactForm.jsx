import { useState } from "react";

export default function ({ onAddContact }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    onAddContact(newContact);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Tambah Kontak Baru</h2>

      <div>
        <label htmlFor="">Nama : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Lengkap" />
      </div>

      <div>
        <label htmlFor="">Email : </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Anda" />
      </div>

      <div>
        <label htmlFor="">Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="nomor telpon" />
      </div>

      <button type="sumbit">Tambah</button>
    </form>
  );
}
