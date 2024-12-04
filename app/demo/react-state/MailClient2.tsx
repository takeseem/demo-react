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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // TODO: 支持多选
  const selectedCount = selectedIds.length;

  function handleToggle(toggledId: number) {
    // TODO: 支持多选
    const idx = selectedIds.findIndex(id => id === toggledId);
    setSelectedIds(idx !== -1
      ? selectedIds.toSpliced(idx, 1)
      : selectedIds.toSpliced(selectedIds.length, 0, toggledId)
    );
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
              selectedIds.includes(letter.id)
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
