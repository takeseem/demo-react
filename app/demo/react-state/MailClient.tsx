import { btnStyle } from "@/app/lib/definitions";
import { useState } from "react";

type Letter = {
  id: number;
  subject: string;
  isStarred: boolean;
};

const initialLetters: Letter[] = [{
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
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState<Letter | null>(null);

  function handleHover(letter: Letter) {
    setHighlightedLetter(letter);
  }

  function handleStar(starred: Letter) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter === highlightedLetter
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}

function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: {
  letter: Letter;
  isHighlighted: boolean;
  onHover: (letter: Letter) => void;
  onToggleStar: (letter: Letter) => void;
}) {
  return (
    <li
      style={{ background: isHighlighted ? 'gray' : '' }}
      onFocus={() => {
        onHover(letter);        
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button style={btnStyle} onClick={() => {
        onToggleStar(letter);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}
