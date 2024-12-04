import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useState } from "react";


type Contact = {
  id: number;
  name: string;
  email: string;
};

const initialContacts: Contact[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];



export default function ContactManager() {
  const [
    contacts,
    setContacts
  ] = useState(initialContacts);
  const [
    selectedId,
    setSelectedId
  ] = useState(0);
  const selectedContact = contacts.find(c =>
    c.id === selectedId
  ) as Contact;

  function handleSave(updatedData: Contact) {
    const nextContacts = contacts.map(c => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={id => setSelectedId(id)}
      />
      <EditContact
        initialData={selectedContact}
        onSave={handleSave}
      />
    </div>
  )
}

function ContactList({
  contacts,
  selectedId,
  onSelect
}: {
  contacts: Contact[],
  selectedId: number,
  onSelect: (id: number) => void
}) {
  return (
    <section>
      <ul style={{ display: "flex", gap: "0.5rem", }}>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button style={btnStyle} onClick={() => {
              onSelect(contact.id);
            }}>
              {contact.id === selectedId ?
                <b>{contact.name}</b> :
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

function EditContact({ initialData, onSave }: {
  initialData: Contact,
  onSave: (data: Contact) => void
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section style={{padding: "0.5rem"}}>
      <label>
        名称：
        <input style={bgStyle}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        邮箱：
        <input style={bgStyle}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <br/>
      <button style={btnStyle} onClick={() => {
        const updatedData = {
          id: initialData.id,
          name: name,
          email: email
        };
        onSave(updatedData);
      }}>
        保存
      </button>
      <button style={btnStyle} onClick={() => {
        setName(initialData.name);
        setEmail(initialData.email);
      }}>
        重置
      </button>
    </section>
  );
}

