import { useState } from "react";

export default function ContactForm({ tambahKontak }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const kontakBaru = {
      id: Date.now,
      name,
      email,
      phone,
    };

    tambahKontak(kontakBaru);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Masukan Kontak Baru</h2>

      <div>
        <label htmlFor="">Nama Kontak : </label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nama Lengkap" />
      </div>

      <div>
        <label htmlFor="">Email : </label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      </div>

      <div>
        <label htmlFor="">Phone Number : </label>
        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Nomor Telepone" />
      </div>

      <button type="submit">Tambah Kontak</button>
    </form>
  );
}
