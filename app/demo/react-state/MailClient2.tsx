import { useState } from "react";

type Letter = {
  id: number;
  subject: string;
  isStarred: boolean;
};

export const letters: Letter[] = [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
}];


export default function MailClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // TODO: 支持多选
  const selectedCount = 1;

  function handleToggle(toggledId: number) {
    // TODO: 支持多选
    setSelectedId(toggledId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: 支持多选
              letter.id === selectedId
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}


function Letter({
  letter,
  onToggle,
  isSelected,
}: {
  letter: Letter;
  onToggle: (id: number) => void;
  isSelected: boolean;
}) {
  return (
    <li className={
      isSelected ? 'selected' : ''
    }>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  )
}
