'use client';

import { useState } from 'react';
import styles from '../../ui/demo/game-ttt/game-ttt.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function Page() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [status, setStatus] = useState(`Next player: ${player}`);
  const [historyRecords, setHistoryRecords] = useState<HistoryRecord[]>([
    { id: 0, nextPlayer: player, squares, status},
  ]);
  const handleClick = (i: number) => {
    if (squares[i] !== null || calcWinner(squares)) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);

    let nextPlayer, nextStatus;
    if (calcWinner(nextSquares)) {
      nextStatus = `Winner: ${player}`;
      nextPlayer = player;
    } else {
      nextPlayer = player === 'X' ? 'O' : 'X';
      nextStatus = `Next player: ${nextPlayer}`;      
      setPlayer(nextPlayer);
    }
    setStatus(nextStatus);

    const nextHistory = [
      ...historyRecords,
      { id: historyRecords.length, player, nextPlayer, squares: nextSquares, status: nextStatus }
    ];
    setHistoryRecords(nextHistory);
  };

  const onJump = (i: number) => {
    const r = historyRecords[i];
    setSquares(r.squares);
    setStatus(r.status);
    setPlayer(r.nextPlayer);
    setHistoryRecords(historyRecords.slice(0, i + 1))
  };

  return (
    <main>
      <div className={styles.main}>
        <div>
          <div className='text-2xl'>井字棋游戏</div>
          <div>{status}</div>
          <Board squares={squares} handleClick={handleClick}/>
        </div>
        <History records={historyRecords} onJump={onJump}/>
      </div>
      <div className='p-4'>
        <Link href="https://zh-hans.react.dev/learn/tutorial-tic-tac-toe">
          <FontAwesomeIcon icon={faReact} className="rotate-[15deg]" /> 教程：井字棋游戏
        </Link>
        <div className="p-4 max-w-md">
          本教程将引导你逐步实现一个简单的井字棋游戏，并且不需要你对 React 有任何了解。在此过程中你会学习到一些编写 React 程序的基本知识，完全理解它们可以让你对 React 有比较深入的理解。
        </div>
      </div>      
    </main>
  );
}

function History({records, onJump, }: {
  records: HistoryRecord[],
  onJump: (i: number) => void,
}) {
  return (
    <div>
      <div>历史记录</div>
      {records.map((v, i) => {
        const desc = i === 0 ? 'Go to game start' : `${v.player}: go to move # ${i}`;
        return (
          <div key={i}>
            {i}.
            <button className={styles.historyButton} onClick={() => onJump(i)}>{desc}</button>
          </div>
        );
      })}
    </div>
  );
}

type HistoryRecord = {
  id: number,
  player?: string,
  nextPlayer: string,
  squares: string[],
  status: string,
}

function Board({ squares, handleClick, }: {
  squares: string[],
  handleClick: (i: number) => void,
}) {
  return (
    <div>
      <div className={styles.row}>
        <Square v={squares[0]} onClick={() => handleClick(0)}/>
        <Square v={squares[1]} onClick={() => handleClick(1)}/>
        <Square v={squares[2]} onClick={() => handleClick(2)}/>
      </div>
      <div className={styles.row}>
        <Square v={squares[3]} onClick={() => handleClick(3)}/>
        <Square v={squares[4]} onClick={() => handleClick(4)}/>
        <Square v={squares[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className={styles.row}>
        <Square v={squares[6]} onClick={() => handleClick(6)}/>
        <Square v={squares[7]} onClick={() => handleClick(7)}/>
        <Square v={squares[8]} onClick={() => handleClick(8)}/>
      </div>
    </div>
  );
}

function Square({ v, onClick,}: {
  v: string,
  onClick: () => void,
}) {
  return (
    <div className={styles.square} onClick={onClick}>{v}</div>
  );
}

function calcWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}