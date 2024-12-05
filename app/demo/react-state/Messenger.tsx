import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useReducer } from "react";

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

export const initialState = {
  selectedId: 0,
  message: '你好',
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}


export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div style={{ display: "flex", gap: "0.5rem", }}>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

function ContactList({contacts, selectedId, dispatch}) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button style={btnStyle}
              onClick={() => {
                // TODO: dispatch changed_selection
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({contact, message, dispatch}) {
  return (
    <section className="chat">
      <textarea style={{ ...bgStyle, height: "150px", }}
        value={message}
        placeholder={'和 ' + contact.name + ' 聊天'}
        onChange={(e) => {
          // TODO: 派发 edited_message
          // (从 e.target.value 获取输入框的值)
        }}
      />
      <br />
      <button style={btnStyle}>发送到 {contact.email}</button>
    </section>
  );
}
