import { btnStyle } from '@/app/lib/definitions';
import { useState } from 'react';

type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = reverse ? contacts.toReversed() : contacts;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        以相反的顺序显示
      </label>
      <ul>
        {displayedContacts.map((contact) =>
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

function Contact({ contact }: { contact: Contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p><b>{contact.name}</b></p>
      {expanded &&
        <p><i>{contact.email}</i></p>
      }
      <button style={btnStyle} onClick={() => {
        setExpanded(!expanded);
      }}>
        {expanded ? '隐藏' : '显示'}邮箱
      </button>
    </>
  );
}
