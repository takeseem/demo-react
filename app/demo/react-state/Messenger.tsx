import { bgStyle, btnStyle } from "@/app/lib/definitions";
import { useReducer } from "react";

type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

type MsgState = {
  selectedId: number;
  message: string;
};
export const initialState: MsgState = {
  selectedId: 0,
  message: '你好',
};

type Action = {
  type: 'changed_selection' | 'edited_message' | 'send_message';
  contactId?: number;
  message?: string;
};

export function messengerReducer(state: MsgState, action: Action): MsgState {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId as number,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message as string,
      };
    }
    case 'send_message' : {
      return {
        ...state,
        message: '',
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
  const contact = contacts.find((c) => c.id === state.selectedId) as Contact;
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

function ContactList({contacts, selectedId, dispatch}: {
  contacts: Contact[];
  selectedId: number;
  dispatch: (action: Action) => void;
}) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button style={btnStyle}
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({ type: "changed_selection", contactId: contact.id, });
              }}>
              {selectedId === contact.id ? <b style={{ color: "red" }}>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({contact, message, dispatch}: {
  contact: Contact;
  message: string;
  dispatch: (action: Action) => void
}) {
  return (
    <section className="chat">
      <textarea style={{ ...bgStyle, height: "150px", }}
        value={message}
        placeholder={'和 ' + contact.name + ' 聊天'}
        onChange={(e) => {
          // TODO: 派发 edited_message
          // (从 e.target.value 获取输入框的值)
          dispatch({ type: "edited_message", message: e.target.value, });
        }}
      />
      <br />
      <button style={btnStyle} onClick={() => {
        alert(`发送给 ${contact.email}: ${message}`);
        dispatch({ type: "send_message", });
      }}>发送到 {contact.email}</button>
    </section>
  );
}
