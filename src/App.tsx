import { useState } from 'react';
import './App.css';

function App() {
  interface User {
    name: string;
  }

  const [userName, setName] = useState<string>('')
  const [lista, setLista] = useState<User[]>([])

  const handleChange = (e: any) => {
    const target = e.target;
    setName(target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLista([...lista, { name: userName }]);
    setName('');
  };

  return (
    <div className="App">
      {lista.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={userName} onChange={(e) => handleChange(e)} />
        <input type="submit" value='send' />
      </form>
    </div>
  );
}

export default App;
