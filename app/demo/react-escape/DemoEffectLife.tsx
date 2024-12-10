import { bgStyle } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }: { roomId: string, }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>欢迎来到 {roomId} 聊天室！</h1>
      <input style={bgStyle}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}

export function ChatApp() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        选择聊天室：{' '}
        <select style={bgStyle}
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <hr style={{ width: '16rem', }} />
      <ChatRoom roomId={roomId} />
    </>
  );
}
function createConnection(serverUrl: string, roomId: string) {
  // 实际的实现将会连接到服务器
  return {
    connect() {
      console.log('✅ 建立连接 "' + roomId + '" 聊天室位于 ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ 断开连接 "' + roomId + '" 聊天室位于 ' + serverUrl);
    }
  };
}

// 第 2 个挑战 共 5 个挑战: 打开和关闭状态同步 
export function App2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(false);

  useEffect(() => {
    if (!canMove) return;

    function handleMove(e: PointerEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        是否允许移动
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}

// 第 3 个挑战 共 5 个挑战: 寻找过时值的错误
export function App3() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(false);


  useEffect(() => {

    function handleMove(e: PointerEvent) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        是否允许移动
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}

// 第 4 个挑战 共 5 个挑战: 修复连接开关
export function ChatApp4() {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", alignItems: "flex-start", padding: "0.5rem", }}>
      <label>
        选择聊天室：{' '}
        <select style={bgStyle}
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">所有</option>
          <option value="travel">旅游</option>
          <option value="music">音乐</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
        />
        启用加密
      </label>
      <hr style={{ width: "16rem", }}/>
      <ChatRoom4
        roomId={roomId}
        createConnection={isEncrypted ?
          createEncryptedConnection :
          createUnencryptedConnection
        }
      />
    </div>
  );
}
type Connection = {
  connect(): void;
  disconnect(): void;
};
function createEncryptedConnection(roomId: string): Connection {
  // 实际的实现将会连接到服务器
  return {
    connect() {
      console.log('✅ 🔐 建立连接 "' + roomId + '... (加密)');
    },
    disconnect() {
      console.log('❌ 🔐 断开连接 "' + roomId + '" room (加密)');
    }
  };
}

function createUnencryptedConnection(roomId: string): Connection {
  // 实际的实现将会连接到服务器
  return {
    connect() {
      console.log('✅ 建立连接 "' + roomId + '... (未加密)');
    },
    disconnect() {
      console.log('❌ 断开连接 "' + roomId + '" room (未加密)');
    }
  };
}
function ChatRoom4({ roomId, createConnection }: {
  roomId: string;
  createConnection: (roomId: string) => Connection;
}) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createConnection]);

  return <h1>欢迎来到 {roomId} 聊天室！</h1>;
}

// 第 5 个挑战 共 5 个挑战: 填充一系列选择框
type Plant = {
  id: string;
  name: string;
};

export function EffectLifeApp5() {
  const [planetList, setPlanetList] = useState<Plant[]>([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState<Place[]>([]);
  const [placeId, setPlaceId] = useState('');

  function setPlaces(places: Place[]) {
    setPlaceList(places);
    setPlaceId(places.length > 0 ? places[0].id : '');
  }

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('获取了一个行星列表。');
        setPlanetList(result);
        setPlanetId(result[0].id); // 选择第一个行星
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (planetId === '') {
      console.log(new Date().toISOString(), "没有选择行星: plantId==", planetId);
      return;
    }

    setPlaces([]);
    let ignore = false;
    fetchPlaces(planetId).then(result => {
      if (!ignore) {
        console.log(new Date().toISOString(), '获取行星的地点');
        setPlaces(result);
      }
    })
    return () => {
      ignore = true;
    }
  }, [planetId]);

  return (
    <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", padding: "0.5rem", }}>
      <label>
        选择一个行星：{' '}
        <select style={bgStyle} value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList?.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        选择一个地点：{' '}
        <select style={bgStyle} value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList?.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr style={{ width: "16rem", }} />
      <p>你将要前往：{planetId || '...'} 的 {placeId || '...'} </p>
    </div>
  );
}

function fetchData(url: string) {
  if (url === '/planets') {
    return fetchPlanets();
  } else if (url.startsWith('/planets/')) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error('预期的 URL，如“/planets/earth/places”。 已收到："' + url + '"。');
    }
    return fetchPlaces(match[1]);
  } else throw Error('预期的 URL，如“/planets”或“/planets/earth/places”。已收到："' + url + '"。');
}

async function fetchPlanets() {
  return new Promise<Plant[]>(resolve => {
    setTimeout(() => {
      resolve([{
        id: 'earth',
        name: '地球'
      }, {
        id: 'venus',
        name: '金星'
      }, {
        id: 'mars',
        name: '火星'        
      }]);
    }, 1000);
  });
}

type Place = {
  id: string;
  name: string;
};

async function fetchPlaces(planetId: string) {
  if (typeof planetId !== 'string') {
    throw Error(
      'fetchPlaces(planetId) 需要一个字符串参数。' +
      '而是收到：' + planetId + '。'
    );
  }
  return new Promise<Place[]>(resolve => {
    setTimeout(() => {
      if (planetId === 'earth') {
        resolve([{
          id: 'laos',
          name: '老挝'
        }, {
          id: 'spain',
          name: '西班牙'
        }, {
          id: 'vietnam',
          name: '越南'        
        }]);
      } else if (planetId === 'venus') {
        resolve([{
          id: 'aurelia',
          name: '奥雷利亚'
        }, {
          id: 'diana-chasma',
          name: '戴安娜哈斯玛'
        }, {
          id: 'kumsong-vallis',
          name: 'Kŭmsŏng山谷'        
        }]);
      } else if (planetId === 'mars') {
        resolve([{
          id: 'aluminum-city',
          name: '铝城'
        }, {
          id: 'new-new-york',
          name: '纽纽约'
        }, {
          id: 'vishniac',
          name: '毗湿奴'
        }]);
      } else throw Error('未知的行星编号：' + planetId);
    }, 1000);
  });
}
